import React from 'react';

export default function Button(props) {
  const { text, style, onClick } = props;

  return (
    <div>
      <button onClick={onClick} style={style}>{text}</button>
    </div>
  );
}
