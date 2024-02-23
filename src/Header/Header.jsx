import React from 'react'
import './Header.css'
import Logo from '../assets/app-logo-white.png'

function Header() {
  return (
    <header>
        <img src={Logo} alt='logo' className='logo'/>
        <div className='header-container'>
            <nav className="navbar">
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
            <input type='checkbox' href='#' className='checkbox' id='menu-open'/>
            <label htmlFor='menu-open' className='menu-open-button'>
              <span className='line-1'></span>
              <span className='line-2'></span>
              <span className='line-3'></span>
            </label>
        </div>
    </header>
  )
}

export default Header