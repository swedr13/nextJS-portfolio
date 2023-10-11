'use client'

import Link from "next/link";
import { useSession } from "next-auth/react"
 

const LoginButton = () => {
  const { data: session, loading } = useSession();
  console.log({ session, loading })

    return (
      <>
      {!loading && !session && (
        <Link href="/api/auth/signin" passHref>
        <button role="button" className="btn btn-danger">Login</button>
        <br />
        <br />
      </Link>
      )}

      {session && (
        <Link href="/api/auth/sigout" passHref>
        <button role="button" className="btn btn-danger">Logout</button>
        <br />
        <br />
      </Link>
        
      )}

    </>  
    );
  }

export default LoginButton;

