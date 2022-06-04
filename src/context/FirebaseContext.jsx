import { createContext } from "react";
import { auth, firebase, firestore } from "../firebase/config";

export const FirebaseContext = createContext(null);
export const FirebaseContextProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ firebase, firestore, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};
