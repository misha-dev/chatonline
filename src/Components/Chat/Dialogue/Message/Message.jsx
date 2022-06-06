import cl from "./Message.module.css";
// {
//   uid, photoURL, displayName, message;
// }
export const Message = () => {
  return (
    <div className={cl.messageWrapper}>
      <img src="k" alt="" />
      <div className={cl.message}>
        jdsklasdjfasdkskfjjksfjkfsdajkfdsjdsklasdjfasdkskfjjksfjkfsdajkfds
        jdsklasdjfasdkskfjjksfjkfsdajkfds jdsklasdjfasdkskfjjksfjkfsdajkfds
        jdsklasdjfasdkskfjjksfjkfsdajkfds jdsklasdjfasdkskfjjksfjkfsdajkfds
        jdsklasdjfasdkskfjjksfjkfsdajkfds jdsklasdjfasdkskfjjksfjkfsdajkfds
      </div>
    </div>
  );
};
