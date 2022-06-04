import { FcGoogle } from "react-icons/fc";
import cl from "./Login.module.css";

export const Login = () => {
  return (
    <div className={cl.loginWrapper}>
      <div className={cl.login}>
        <p>Login via Google</p>
        <FcGoogle className={cl.googleIcon} />
      </div>
    </div>
  );
};
