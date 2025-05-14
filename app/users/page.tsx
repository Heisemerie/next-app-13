import React from "react";
import UserTable from "./UserTable";

const UsersPage = () => {
  return (
    <>
      <h1>Users</h1>
      {/* the line below refreshes in development but not in production */}
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable />
    </>
  );
};

export default UsersPage;
