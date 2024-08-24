import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    // code for navbar
    <nav>
        <img src={logo} alt="logo" />
        <ul className='nav-menu'>
            <li> Home </li>
            <li> About Us</li>
            <li> Pages </li>
        </ul>
        <div className='nav-button'>
            <button className='btn_green'> Login </button>
            <button className='btn_white'> Sign Up</button> 
        </div>
        
    </nav>
  )
}

export default Navbar
