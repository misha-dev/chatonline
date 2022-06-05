import { createContext, useEffect, useState } from "react";
import { auth, firebase, firestore } from "../firebase/config";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setLogged(true);
      unsub();
    });
  }, []);
  return (
    <FirebaseContext.Provider value={{ firebase, firestore, auth, logged }}>
      {children}
    </FirebaseContext.Provider>
  );
};
