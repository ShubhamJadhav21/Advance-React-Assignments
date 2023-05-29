import React from "react";

const Input = (props) => {
  const { placeholderText, onchange, value,style } = props;
  return (
    <div>
      <input
        type="text"
        placeholder={placeholderText}
        onChange={onchange}
        // value={value}
        className={style}
      />
    </div>
  );
};

export default Input;
