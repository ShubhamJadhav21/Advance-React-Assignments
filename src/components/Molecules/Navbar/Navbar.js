import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri"
import { RxCross1 } from "react-icons/rx";
import styles from './Navbar.module.css'

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      <nav className={show ? `${styles.mobile} ${styles.active}` : styles.menu}>
        <nav >
          <NavLink to={"/"}>Home</NavLink>
          </nav>
          <nav >
          <NavLink to={"/about"}>About</NavLink>
          </nav>
          <nav >
          <NavLink to={"/login"}>Login</NavLink>
          </nav>
          <nav>
          <NavLink to={"/register"}>Register</NavLink>
          
          </nav>
          

        
      </nav>

      <div onClick={() => setShow(!show)} className={styles.hamburger}>
        {show ? <RxCross1 /> : <RiMenu3Line />}
      </div>
    </div>
  );
}
