import { useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useScrollbar } from "../../../hooks/useScrollbar";
import { LoaderUsers } from "../../Loaders/LoaderUsers/LoaderUsers";
import cl from "./Users.module.css";

export const Users = ({ userCurrent, firestore, setUserIdDialogue }) => {
  const [users] = useCollectionData(
    firestore.collection("users").where("uid", "!=", userCurrent.uid)
  );

  const listOfUsersToScroll = useRef();
  useScrollbar(listOfUsersToScroll, users?.length > 1);

  return (
    <div ref={listOfUsersToScroll} className={cl.usersWrapper}>
      {users ? (
        users.map((user) => {
          return (
            <label key={user.uid}>
              <input
                onChange={() => {
                  setUserIdDialogue(user.uid);
                }}
                value={user.uid}
                type="radio"
                name="userDialogue"
              />

              <div className={cl.userCard}>
                <div className={cl.wrapperImg}>
                  <img alt="" src={user.photoURL}></img>
                  <div
                    style={{
                      backgroundColor: user.online ? "#2f70d2" : "white",
                    }}
                    className={cl.online}
                  ></div>
                </div>

                <div className={cl.userName}>{user.displayName}</div>
              </div>
            </label>
          );
        })
      ) : (
        <LoaderUsers />
      )}
    </div>
  );
};
