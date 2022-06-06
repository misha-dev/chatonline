import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { LoaderUsers } from "../../Loaders/LoaderUsers/LoaderUsers";
import cl from "./Users.module.css";

export const Users = ({ userCurrent, firestore }) => {
  const [users] = useCollectionData(firestore.collection("users"));
  return (
    <div className={cl.usersWrapper}>
      {users ? (
        users.map((user) => {
          if (user.uid !== userCurrent.uid) {
            return (
              <label key={user.uid}>
                <input
                  onChange={() => {
                    console.log(user.uid);
                  }}
                  value={user.uid}
                  type="radio"
                  name="userDialogue"
                />

                <div className={cl.userCard}>
                  <img
                    alt=""
                    src={user.photoURL}
                    style={{
                      background: `url(${
                        process.env.PUBLIC_URL + "/images/userPreview.png"
                      }) no-repeat center center/cover`,
                    }}
                  />

                  <div className={cl.userName}>{user.displayName}</div>
                </div>
              </label>
            );
          } else {
            return <React.Fragment key={user.uid}></React.Fragment>;
          }
        })
      ) : (
        <LoaderUsers />
      )}
    </div>
  );
};
