import firebase from "firebase";
import { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { firestore } from "../../../../firebase/config";
import { scrollBars } from "../../../../hooks/useScrollbar";
import cl from "./SendMessage.module.css";

export const SendMessage = ({ hashId, userCurrent }) => {
  const [message, setMessage] = useState("");
  const inputMessageArea = useRef();
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

    inputMessageArea?.current?.focus();

    setMessage("");
  };
  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={cl.sendMessageWrapper}>
      <textarea
        onFocus={() => {
          scrollBars?.scroll([0, "100%"], 70);
        }}
        ref={inputMessageArea}
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
  );
};