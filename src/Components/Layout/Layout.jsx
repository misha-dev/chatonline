import { Outlet } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import cl from "./Layout.module.css"

export const Layout = () => {
  return (
    <>
      <Menu />
      <div className={cl.mainContent}>
        <Outlet />
      </div>

      <footer></footer>
    </>
  );
};
