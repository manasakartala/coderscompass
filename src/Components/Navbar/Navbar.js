import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src='/logo192.png' className="App-logo" alt="logo" />
        <ul>
            <li><button className='btn'>Welcome</button></li>
            <li>Explore</li>
            <li>Why CodersCompass</li>
            <li>Contact-Us</li>
            <li>Sign Up</li>
        </ul>
    </nav>
  )
}

export default Navbar