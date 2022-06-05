import { useAuth } from "../../hooks/useAuth";
import { useFirebaseContext } from "../../hooks/useFirebaseContext";
import cl from "./Chat.module.css";
import { Dialogue } from "./Dialogue/Dialogue";
import { Users } from "./Users/Users";

export const Chat = () => {
  const { firestore } = useFirebaseContext();
  const userCurrent = useAuth();
  // const [messages, loading] = useCollectionData(firestore.collection("messages"))

  return (
    <div className={cl.chatWrapper}>
      <Users userCurrent={userCurrent} firestore={firestore} />
      <Dialogue />
    </div>
  );
};
