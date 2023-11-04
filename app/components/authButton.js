import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const LogoutBtn = () => {
  return (
    <button
      role="button"
      className="btn btn-danger mb-4 mt-5"
      style={{ backgroundColor: "#bd5d38", borderColor: "#bd5d38" }}
      onClick={() => signOut()}>
        Logout
    </button>
  );
}

const LoginBtn = () => {
  return (
    <button
      role="button"
      className="btn btn-danger mb-4"
      style={{ backgroundColor: "#bd5d38", borderColor: "#bd5d38" }}>
      <Link href="/api/auth/signin" className="text-white">
        Add Project
      </Link>
    </button>
  );
}

export { LogoutBtn, LoginBtn };