import React, { useState } from "react";
import Input from "../../Atom/InputField/Input";
import Complete from "../../Atom/Buttons/Complete/Complete";
import Delete from "../../Atom/Buttons/Delete/Delete";
import style from "./AddToDo.module.css";
const AddToDo = () => {
  let styles = {
    background: "red",
    color: "white",
  };
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [pending, setPending] = useState(0);
  function CompleteTodo(id) {
    setItems((previousTodo) =>
      previousTodo.map((item, index) => {
        if (index === id && !item.completed) {
          setPending((prevPending) => prevPending - 1); // Decrement pending count
          return { ...item, completed: true };
        }
        return item;
      })
    );
  }
  function InputChange(e) {
    setInput(e.target.value);
  }
  function listOfItems() {
    if (input !== "") {
      setItems((previousTodo) => {
        return [...previousTodo, input];
      });
      setInput("");
    } else {
      alert("please add task");
    }
  }
  function DeleteTodo(index) {
    setItems((previousTodo) => {
      const newTodo = [...previousTodo];
      newTodo.splice(index, 1);
      return newTodo;
    });
  }

  function CompleteTodo(id) {
    setItems((previousTodo) =>
      previousTodo.map((item, index) => {
        if (index === id && !item.completed) {
          setPending((prevPending) => prevPending - 1); // Decrement pending count
          return { ...item, completed: true };
        }
        return item;
      })
    );
  }

  return (
    <div className={style.todoWrapper}>
      <ol>
        <p style={{ color: "#FF6C00" }}>Pending: {pending}</p>

        {items.map((item, index) => {
          return (
            <div>
              <li className={style.list} key={index}>
                {item}

                <Complete text="complete" complete={CompleteTodo} />
                <Delete onClick={() => DeleteTodo(index)} styles={styles} />
              </li>
            </div>
          );
        })}
      </ol>
      <Input onChange={InputChange} value={input} />
      <Complete text="Add TODo" styles={styles} onClick={listOfItems} />
    </div>
  );
};

export default AddToDo;
