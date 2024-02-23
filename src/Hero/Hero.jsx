import React from 'react'
import './Hero.css'
import heroImg from '../assets/1.png'

function Hero() {
  return (
    <section className='hero'>
      <img src={heroImg} alt='hero-bg-img'></img>
      <div className="content">
        <p>MAGNETIC PATHS<br />TO A STRONGER,</p><p>HEALTHIER YOU.</p>
      </div>
    </section>
  )
}

export default Hero