import React from "react";
import style from "./Navigation.module.css";
import Login from "../../Atom/Buttons/Login/Login";
import MenuIcon from "@mui/icons-material/Menu";
export default function Navigation() {
  return (
    <div className={style.containerWrapper}>
      <ul className={style.menu}>
        <li className={style.logo}>
          <img
            src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/rolex.png"
            alt="Logo"
          />
        </li>

        <li className={style.list}>Home</li>
        <li className={style.list}>About</li>
        <li className={style.list}>Project</li>
        <li className={style.list}>Videos</li>
        <li className={style.list}>Contact</li>
        <li className={style.btnLogin}>
          
          <Login />
        </li>

        <li className={style.icon}>
          <MenuIcon fontSize="large" />
        </li>
      </ul>
      
    </div>
  );
}
