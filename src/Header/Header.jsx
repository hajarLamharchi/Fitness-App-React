import React from 'react'
import './Header.css'
import Logo from '../assets/app-logo-white.png'

function Header() {
  return (
    <header>
        <div className='header-container'>
            <img src={Logo} alt='logo'/>
            <nav className="navbar">
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header