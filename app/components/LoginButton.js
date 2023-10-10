import { useState } from "react";

const LoginButton = () => {
    const [isLoggedin, setIsLoggedin] = useState(false)
  
    const handleSign = () => {
      if(isLoggedin){
        location.href="/api/auth/signin"
      }
    }
  return (
      <button onClick={handleSign} type="button" className="btn btn-danger">Login</button>
  );
}
export default LoginButton;