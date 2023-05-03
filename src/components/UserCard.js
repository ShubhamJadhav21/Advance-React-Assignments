import React from 'react'
import './UserCard.css';
export default function UserCard({user}) {
  return (
    <div className='container'>
      <div className="wrapper">
        <h1 id='id'>{user.id}</h1>
      <img src={user.avatar}/>
      <h1>{user.first_name}</h1>
      <h1>{user.last_name}</h1>
      <div className="usrDetails">
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>{user.email}</p>
      </div>
    </div>
    </div>
  )
}
