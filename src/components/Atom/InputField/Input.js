import React from 'react';
import style from './Input.module.css';

const Input = (props) => {
  return (
    <div>
      <input type="text" placeholder='Add a new task' value={props.value} className={style.input} onChange={props.onChange} />
    </div>
  );
};

export default Input;
