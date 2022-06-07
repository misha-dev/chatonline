import { useAuth } from "../../../../hooks/useAuth";
import { toDateTime } from "../../../../utils/toDateTime";
import cl from "./Message.module.css";

export const Message = ({ uid, photoURL, message, createdAt }) => {
  const user = useAuth();
  const currentUserMessage = user.uid === uid;
  let dateCreation;
  if (createdAt) {
    dateCreation = toDateTime(createdAt.toDate());
  }
  return (
    <div
      className={cl.messageWrapper}
      style={{ justifyContent: currentUserMessage ? "flex-end" : "flex-start" }}
    >
      {currentUserMessage ? (
        <>
          <div className={cl.message}>
            {message}{" "}
            <div className={`${cl.dateCreation} ${cl.dateCreationRight}`}>
              {dateCreation}
            </div>
          </div>
          <img style={{ marginLeft: "5px" }} src={photoURL} alt="" />
        </>
      ) : (
        <>
          <img style={{ marginRight: "5px" }} src={photoURL} alt="" />
          <div className={cl.message}>
            {message}{" "}
            <div className={`${cl.dateCreation} ${cl.dateCreationLeft}`}>
              {dateCreation}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
