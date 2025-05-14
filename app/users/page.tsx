import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

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
      <Link href={"/users/new"} className="btn">New user</Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
