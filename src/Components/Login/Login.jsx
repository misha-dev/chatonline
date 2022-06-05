import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FirebaseContext } from "../../context/FirebaseContext";
import cl from "./Login.module.css";

export const Login = () => {
  const { auth, firebase } = useContext(FirebaseContext);
  const login = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(googleProvider);
    console.log(user);
  };
  return (
    <div className={cl.loginWrapper}>
      <div onClick={login} className={cl.login}>
        <p>Login via Google</p>
        <FcGoogle className={cl.googleIcon} />
      </div>
    </div>
  );
};
