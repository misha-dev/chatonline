import { FcGoogle } from "react-icons/fc";
import { useFirebaseContext } from "../../hooks/useFirebaseContext";
import cl from "./Login.module.css";

export const Login = () => {
  const { firestore, auth, firebase } = useFirebaseContext();
  const login = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(googleProvider);
    firestore.collection("users").doc(user.uid).set({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });

    // const userData = await firestore.collection("users").doc(user.uid).get();

    // const userInfo = await userData.data();
    // console.log(userInfo);
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
