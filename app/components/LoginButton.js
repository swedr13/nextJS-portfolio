import { useSession } from "next-auth/react"
import { LoginBtn, LogoutBtn } from "./authButton";

const LoginButton = () => { 
  const { data: session } = useSession();

  return (
    <>
    {session ? <LogoutBtn /> : <LoginBtn />}
    </>
  );
}

export default LoginButton;

