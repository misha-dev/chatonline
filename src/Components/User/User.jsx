import cl from "./User.module.css";

export const User = () => {
  return (
    <div className={cl.user}>
      <img
        alt=""
        src={process.env.PUBLIC_URL + "/images/userPreview.png"}
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/images/userPreview.png"
          }) no-repeat center center/cover`,
        }}
      />
    </div>
  );
};
