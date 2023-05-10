import React from 'react'
import style from './Card.module.css';
export default function Card(props) {
    const {image,name,designation,experience}=props;
  return (
    
      <div className={style.card}>
       <img src={image} alt={name} />
       <p className={style.name}>{name}</p>
       <p>{designation}</p>
       <p className={style.exp}>{experience}</p>

      </div>
    
  )
}
