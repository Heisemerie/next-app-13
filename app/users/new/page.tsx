"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUsersPage = () => {
  const router = useRouter(); //used for programmatic navigation
  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      CREATE
    </button>
  );
};

export default NewUsersPage;
