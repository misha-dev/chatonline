import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { auth } from "../../firebase/config";
import { useAuth } from "../../hooks/useAuth";
import cl from "./User.module.css";

export const User = () => {
  const user = useAuth();
  const [showUserOptions, setShowUserOptions] = useState(false);
  const userOptionsClasses = [cl.userOptions];
  if (showUserOptions) {
    userOptionsClasses.push(cl.active);
  }
  return (
    <div
      onClick={() => {
        setShowUserOptions(!showUserOptions);
      }}
      className={cl.user}
    >
      <img alt="" src={user.photoURL} />

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
