import { useState } from "react";
import { firestore } from "../../firebase/config";
import { useAuth } from "../../hooks/useAuth";
import cl from "./Chat.module.css";
import { Dialogue } from "./Dialogue/Dialogue";
import { Users } from "./Users/Users";

export const Chat = () => {
  const userCurrent = useAuth();
  const [userIdDialogue, setUserIdDialogue] = useState(-1)
  // const [messages, loading] = useCollectionData(firestore.collection("messages"))

  return (
    <div className={cl.chatWrapper}>
      <Users userCurrent={userCurrent} firestore={firestore} />
      <Dialogue />
    </div>
  );
};
