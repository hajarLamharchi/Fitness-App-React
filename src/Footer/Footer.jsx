import React from 'react'
import './Footer.css'
import Logo from '../assets/app-logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer id='footer'>
        <img className='footer-logo' src={Logo} alt='logo' />
        <div className='social-icons'>
          <ul>
            <li><hr/></li>
            <li>
              <a href='https://github.com/hajarLamharchi'>
                <FontAwesomeIcon className='icon' icon={faGithub} />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/hajar-lamharchi/'>
                <FontAwesomeIcon className='icon' icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/hajar_l92'>
                <FontAwesomeIcon className='icon' icon={faTwitter} />
              </a>
            </li>
            <li><hr/></li>
          </ul>
        </div>
        <div className='copyright'>
          <p>Copyright &copy; {new Date().getFullYear()} WellnessMagnet, made with ♥ by Hajar LAMHARCHI.</p>
        </div>
        <div className='privacy-terms'>
          <a href='#'>Privacy Policy</a>
          <hr />
          <a href='#'>Terms of Use</a>
        </div>
    </footer>
  )
}

export default Footer