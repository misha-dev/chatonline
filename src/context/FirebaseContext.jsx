import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

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
    <FirebaseContext.Provider value={{ logged }}>
      {children}
    </FirebaseContext.Provider>
  );
};
