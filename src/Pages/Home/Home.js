import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Home.module.css";
import Button from "../../components/Atoms/buttons/Button";


const Home = () => {
  
  const navigate = useNavigate();

  function goToAdmin() {
    
    navigate("/AdminNav");
  }

  function goToStudent() {
    

    navigate("/StudentNav");
  }

  return (
    <div>
      <h1>Online Examination System</h1>
      <div className={style.wrapper}>
        <picture>
          <img
            className={style.adminLogo}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5C-FRYzHQAQ9Su4Ff-0fBoBvtKUYWOM_9J-i33qshfg&usqp=CAU&ec=48600112"
            alt="Admin Img"
          />
          <Button
            text="Admin Login"
            style={style.adminBtn}
            onClick={goToAdmin}
          />
        </picture>
        <picture>
          <img
            className={style.studentLogo}
            src="https://static.vecteezy.com/system/resources/thumbnails/000/350/111/small/Education__28193_29.jpg"
            alt="Student Img"
          />
          <Button
            text="Student Login"
            style={style.studentBtn}
            onClick={goToStudent}
          />
        </picture>
      </div>
    </div>
  );
};

export default Home;
