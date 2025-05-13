import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, //caching only works with the fetch() function and not third party libraries
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      {/* the line below refreshes in development but not in production */}
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
