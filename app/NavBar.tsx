import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-950 p-5">
      <Link href={"/"} className="mr-5">
        Next.js
      </Link>
      <Link href={"/users"} className="mr-3">
        Users
      </Link>
      <Link href={"/admin"} className="mr-3">
        Admin
      </Link>
      <Link href={"/api/auth/signin"} className="mr-3">
        Sign In
      </Link>
    </div>
  );
};

export default NavBar;
