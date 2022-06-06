import { useAuth } from "../../../../hooks/useAuth";
import cl from "./Message.module.css";

export const Message = ({ uid, photoURL, message }) => {
  const user = useAuth();
  const currentUserMessage = user.uid === uid;
  return (
    <div
      className={cl.messageWrapper}
      style={{ justifyContent: currentUserMessage ? "flex-end" : "flex-start" }}
    >
      {currentUserMessage ? (
        <>
          <div className={cl.message}>{message}</div>
          <img style={{ marginLeft: "5px" }} src={photoURL} alt="" />
        </>
      ) : (
        <>
          <img style={{ marginRight: "5px" }} src={photoURL} alt="" />
          <div className={cl.message}>{message}</div>
        </>
      )}
    </div>
  );
};
