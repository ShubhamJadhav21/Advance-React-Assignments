import React from 'react'

const Button = (props) => {
    const {text,style}=props
  return (
    <div>
      <button className={style}>{text}</button>
    </div>
  )
}

export default Button
