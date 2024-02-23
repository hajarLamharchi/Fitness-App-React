import React from 'react'
import './About.css'
import cercleImg from '../assets/cercles.png'

function About() {
  return (
    <section className="about">
        <img src={cercleImg} alt='about-img' />
        <div className="about-container">
            <h1>YOUR FITNESS JOURNEY<br />IN THE PALM OF YOUR HAND</h1>
            <p>Welcome to WellnessMagnet, where our mission is to inspire and empower individuals on their journey to a healthier and happier life.<br />We believe in the transformative power of fitness and wellness, and our app is designed to be your guide, motivating you to achieve your personal wellness goals.</p>
        </div>
    </section>
  )
}

export default About