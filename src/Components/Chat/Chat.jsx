import { useEffect, useState } from "react";
import { firestore } from "../../firebase/config";
import { useAuth } from "../../hooks/useAuth";
import { BlankDialogue } from "./BlankDialogue/BlankDialogue";
import cl from "./Chat.module.css";
import { Dialogue } from "./Dialogue/Dialogue";
import { Users } from "./Users/Users";

export const Chat = () => {
  const userCurrent = useAuth();
  const [userIdDialogue, setUserIdDialogue] = useState(-1);
  useEffect(() => {
    const user = firestore.collection("users").doc(userCurrent.uid);
    const setUserOffline = () => {
      user.update({ online: false });
    };

    const setUserOnline = () => {
      user.update({
        online: true,
      });
    };
    setUserOnline();

    window.addEventListener("beforeunload", setUserOffline);
    window.addEventListener("blur", setUserOffline);
    window.addEventListener("focus", setUserOnline);
    return () => {
      window.removeEventListener("beforeunload", setUserOffline);
      window.removeEventListener("blur", setUserOffline);
      window.removeEventListener("focus", setUserOnline);
    };
  }, []);

  return (
    <div className={cl.chatWrapper}>
      <Users
        setUserIdDialogue={setUserIdDialogue}
        userCurrent={userCurrent}
        firestore={firestore}
      />
      <div className={cl.dialogueArea}>
        {userIdDialogue !== -1 ? (
          <Dialogue userCurrent={userCurrent} userIdDialogue={userIdDialogue} />
        ) : (
          <BlankDialogue />
        )}
      </div>
    </div>
  );
};
