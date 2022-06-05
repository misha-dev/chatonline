import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../hooks/useAuth";
import cl from "./User.module.css";

export const User = () => {
  const user = useAuth();
  return (
    <div className={cl.user}>
      <img
        alt=""
        src={user.photoURL}
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/images/userPreview.png"
          }) no-repeat center center/cover`,
        }}
      />

      <div className={cl.userOptions}>
        <div className={cl.logout}>
          Logout <IoIosLogOut />
        </div>
      </div>
    </div>
  );
};
