import { useEffect, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../../firebase/config";
import { scrollBars, useScrollbar } from "../../../hooks/useScrollbar";
import { hashDialogueId } from "../../../utils/hashDialogueId";
import { LoaderMessages } from "../../Loaders/LoaderMessages/LoaderMessages";
import cl from "./Dialogue.module.css";
import { EmptyDialogue } from "./EmptyDialogue/EmptyDialogue";
import { Message } from "./Message/Message";

import { SendMessage } from "./SendMessage/SendMessage";

export const Dialogue = ({ userCurrent, userIdDialogue }) => {
  const messagesForScrollbar = useRef(null);
  const innerBlockForScroll = useRef(null);
  const [companionName, setCompanionName] = useState("");
  const hashId = hashDialogueId(userCurrent.uid, userIdDialogue);
  const [messages, messagesLoading] = useCollectionData(
    firestore
      .collection("messages")
      .where("access", "==", hashId)
      .orderBy("createdAt")
  );

  firestore
    .collection("users")
    .doc(userIdDialogue)
    .get()
    .then((snapshot) => {
      setCompanionName(snapshot.data().displayName);
    });

  const toScroll = messages?.length > 1;

  useScrollbar(messagesForScrollbar, toScroll);
  // Solved problem with rendering of message from another user
  useEffect(() => {
    scrollBars?.scroll([0, "100%"], 70);
  });

  return (
    <div className={cl.dialogueWrapper}>
      <div className={cl.messagesWrapper}>
        <div className={cl.companionName}>{companionName}</div>
        {messagesLoading ? (
          <LoaderMessages />
        ) : messages.length === 0 ? (
          <EmptyDialogue />
        ) : (
          <div
            ref={messagesForScrollbar}
            className={cl.messageWrapperForScroll}
          >
            {/* for scrollbar to render correctly */}
            <div ref={innerBlockForScroll}>
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
          </div>
        )}
      </div>

      <SendMessage hashId={hashId} userCurrent={userCurrent} />
    </div>
  );
};
