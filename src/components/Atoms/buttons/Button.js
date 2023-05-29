import React from 'react'
import style from './Button.module.css'
const Button = (props) => {
    const {text,style,onClick} = props
  return (
    <div>
      <button className={style} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
