import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const LogoutBtn = () => {
  return (
    <button role="button" className="btn btn-danger mb-4" onClick={() => signOut()}>
      Logout
    </button>
  );
}

const LoginBtn = () => {
  return (
    <button role="button" className="btn btn-danger mb-4">
      <Link href="/api/auth/signin">Login</Link>
    </button>
  );
}

export { LogoutBtn, LoginBtn };