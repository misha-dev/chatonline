import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import cl from "./Dialogue.module.css";

export const Dialogue = () => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    console.log(message);
    setMessage("");
  };
  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <div className={cl.dialogueWrapper}>
      <div className={cl.messagesWrapper}></div>

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
