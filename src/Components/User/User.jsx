import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../hooks/useAuth";
import { useFirebaseContext } from "../../hooks/useFirebaseContext";
import cl from "./User.module.css";

export const User = () => {
  const { auth } = useFirebaseContext();
  const user = useAuth();
  const [showUserOptions, setShowUserOptions] = useState(false);
  const userOptionsClasses = [cl.userOptions];
  if (showUserOptions) {
    userOptionsClasses.push(cl.active);
  }
  console.log(userOptionsClasses);
  return (
    <div
      onClick={() => {
        setShowUserOptions(!showUserOptions);
      }}
      className={cl.user}
    >
      <img
        alt=""
        src={user.photoURL}
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/images/userPreview.png"
          }) no-repeat center center/cover`,
        }}
      />

      <div className={userOptionsClasses.join(" ")}>
        <div
          className={cl.option}
          onClick={() => {
            auth.signOut();
          }}
        >
          Logout <IoIosLogOut style={{ marginLeft: "5px" }} />
        </div>
      </div>
    </div>
  );
};
