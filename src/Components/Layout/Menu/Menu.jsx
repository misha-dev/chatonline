import { Link } from "react-router-dom";
import cl from "./Menu.module.css";

export const Menu = () => {
  return (
    <nav>
      <div className={cl.menu}>
        <Link to={"/chatonline"}>
          <p>Chat Online</p>
        </Link>
        <Link to={"/chatonline"}>
          <img
            src={process.env.PUBLIC_URL + "/images/chat.png"}
            alt="Chat image"
          />
        </Link>
        <div className="user">User</div>
      </div>
    </nav>
  );
};
