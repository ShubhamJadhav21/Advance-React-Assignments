import React from "react";
import style from "./Input.module.css";

export default function Input(props) {
  const { placeholderValue, icon, onChange } = props;
  return (
    <>
      <div>
        <input
          type="text"
          placeholder={placeholderValue}
          className={style.searchBar}
          onChange={onChange}
        />
      </div>
    </>
  );
}
