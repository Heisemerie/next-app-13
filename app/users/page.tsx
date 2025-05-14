import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: "name" | "email" };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);

  return (
    <>
      <h1>Users</h1>
      {/* the line below refreshes in development but not in production */}
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable sortOrder={sortOrder}/>
    </>
  );
};

export default UsersPage;
