import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import style from "./Delete.module.css";

const Delete = (props) => {
  return (
    <div>
      <button className={style.deleteBtn} onClick={props.onClick}>
        <ClearIcon className={style.clearIcon}/>
      </button>
    </div>
  );
};

export default Delete;
