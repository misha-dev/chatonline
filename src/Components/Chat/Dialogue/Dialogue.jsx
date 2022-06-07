import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { IoMdSend } from "react-icons/io";
import { firebase, firestore } from "../../../firebase/config";
import { useScrollbar } from "../../../hooks/useScrollbar";
import { hashDialogueId } from "../../../utils/hashDialogueId";
import { LoaderMessages } from "../../Loaders/LoaderMessages/LoaderMessages";
import cl from "./Dialogue.module.css";
import { EmptyDialogue } from "./EmptyDialogue/EmptyDialogue";
import { Message } from "./Message/Message";

export const Dialogue = ({ userCurrent, userIdDialogue }) => {
  const [message, setMessage] = useState("");
  const messagesForScrollbar = useRef();
  const hashId = hashDialogueId(userCurrent.uid, userIdDialogue);
  const [messages, messagesLoading] = useCollectionData(
    firestore
      .collection("messages")
      .where("access", "==", hashId)
      .orderBy("createdAt")
  );

  const scroll = messages?.length > 10;

  useScrollbar(messagesForScrollbar, scroll);
  console.log(messages);
  const sendMessage = () => {
    if (message.trim() === "") {
      setMessage("");
      return;
    }
    firestore.collection("messages").add({
      access: hashId,
      uid: userCurrent.uid,
      displayName: userCurrent.displayName,
      photoURL: userCurrent.photoURL,
      message: message.trim(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };
  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };
  return (
    <div className={cl.dialogueWrapper}>
      <div className={cl.messagesWrapper}>
        {messagesLoading ? (
          <LoaderMessages />
        ) : messages.length === 0 ? (
          <EmptyDialogue />
        ) : (
          <div
            ref={messagesForScrollbar}
            className={cl.messageWrapperForScroll}
          >
            {messages.map((message, index) => {
              return (
                <Message
                  // User can't delete explicitly messages, so messages there will always have the same index
                  key={index}
                  message={message.message}
                  uid={message.uid}
                  photoURL={message.photoURL}
                  createdAt={message.createdAt}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className={cl.sendMessageWrapper}>
        <textarea
          autoComplete="off"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={handleKeyEnter}
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
