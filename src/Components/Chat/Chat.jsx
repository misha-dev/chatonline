import cl from "./Chat.module.css";
import { Dialogue } from "./Dialogue/Dialogue";
import { Users } from "./Users/Users";

export const Chat = () => {
  return (
    <div className={cl.chatWrapper}>
      <Users />
      <Dialogue />
    </div>
  );
};
