import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: "name" | "email";
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, //caching only works with the fetch() function and not third party libraries
  });
  const users: User[] = await res.json();

  const sortedUsers =
    sortOrder === "name"
      ? sort(users).asc([(u) => u.name])
      : sortOrder === "email"
      ? sort(users).asc([(u) => u.email])
      : users;

  return (
    <table className="table table-border">
      <thead>
        <tr>
          <th>
            <Link href={`/users?sortOrder=name`}>Name</Link>
          </th>
          <th>
            <Link href={`/users?sortOrder=email`}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
