import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { IoMdSend } from "react-icons/io";
import { firebase, firestore } from "../../../firebase/config";
import { hashDialogueId } from "../../../utils/hashDialogueId";
import cl from "./Dialogue.module.css";
import { Message } from "./Message/Message";

export const Dialogue = ({ userCurrent, userIdDialogue }) => {
  const [message, setMessage] = useState("");
  const hashId = hashDialogueId(userCurrent.uid, userIdDialogue);
  const [messages, messagesLoading] = useCollectionData(
    firestore
      .collection("messages")
      .where("access", "==", hashId)
      .orderBy("createdAt")
  );
  // const messages = firestore
  //   .collection("messages")
  //   .where("access", "==", hashId)
  //   .orderBy("createdAt")
  //   .get()
  //   .then((snapshots) => {
  //     snapshots.docs.forEach((doc) => {
  //       console.log(doc.data());
  //     });
  //   });
  console.log(messages);
  const sendMessage = () => {
    firestore.collection("messages").add({
      access: hashId,
      displayName: userCurrent.displayName,
      photoURL: userCurrent.photoURL,
      message: message.trim(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };
  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <div className={cl.dialogueWrapper}>
      <div className={cl.messagesWrapper}>
        <Message />
      </div>

      <div className={cl.sendMessageWrapper}>
        <textarea
          autoComplete="off"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyUp={handleKeyEnter}
          className={cl.message}
          placeholder="Enter a message"
        ></textarea>

        <div onClick={sendMessage} className={cl.sendMessage}>
          <IoMdSend className={cl.sendIcon} />
        </div>
      </div>
    </div>
  );
};
