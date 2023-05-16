import React, { useState } from "react";
import style from "./Todo.module.css";

const Todo = () => {
  const [item, setItems] = useState([]);
  const [input, setInput] = useState("");

  function Add() {
    setItems((prevList) => {
      return [input, ...prevList];
    });
    setInput("");
  }

  function Delete(index) {
    setItems((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  }

  return (
    <div className={style.wrapper}>
      {item.map((item, index) => (
        <div key={index}>
          {item}
          <button className={style.btnDel} onClick={() => Delete(index)}>
            Delete
          </button>
        </div>
      ))}
      <input
        type="text"
        placeholder="add new item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={Add}>Add Item</button>
    </div>
  );
};

export default Todo;
