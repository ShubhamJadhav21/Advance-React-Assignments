import React from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate()
  function GoToKnowMore(){
    navigate("/about")
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <p className={style.Text}>Be There</p>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore
          sed, libero eius pariatur et autem ad vero quisquam quod?
        </p>

        <button className={style.btn2} onClick={GoToKnowMore}>Know More</button>
        
        
      </div>
      <div className={style.rtlPart}>
      
      </div>
    </div>
  );
}