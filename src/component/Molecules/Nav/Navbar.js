import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar() {
  return (
    <div>
      <nav>
        <nav className={style.home}>
            <Link to='/' className={style.Link}>Home</Link>
        </nav>
        <li className={style.favourite}>
            <Link to='/favourite' className={style.Link}>Favourite Movie</Link>
        </li>

      </nav>
    </div>
  )
}
