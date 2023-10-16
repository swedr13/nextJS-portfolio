import { useSession } from "next-auth/react"
import Link from "next/link";

const LoginButton = () => { 
const { data: session } = useSession();

    return (
      <>
      {!session && (
        <Link href="/api/auth/signin" passHref>
        <button role="button" className="btn btn-danger">Login</button>
        <br />
        <br />
      </Link>
      )}

      {session && (
        <Link href="/api/auth/signout" passHref>
        <button role="button" className="btn btn-danger">Logout</button>
        <br />
        <br />
      </Link>  
      )}
    </>  
    );
  }

export default LoginButton;

