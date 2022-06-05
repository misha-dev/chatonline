import { useAuthState } from "react-firebase-hooks/auth";
import { useFirebaseContext } from "./useFirebaseContext";

export const useAuth = () => {
  const { auth } = useFirebaseContext();
  const [user] = useAuthState(auth);
  return user;
};
