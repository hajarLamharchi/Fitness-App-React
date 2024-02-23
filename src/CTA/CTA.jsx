import React from 'react'
import CTAImg from '../assets/CTA.png'
import './CTA.css'

function CTA() {
    return (
        <>
        <section className='CTA'>
            <img src={CTAImg} alt='CTA-img' />
            <div className='CTA-container'>
                <div className="CTA-content">
                    <h2>IT'S EITHER,<br />DAY ONE OR ONE DAY<br/>YOU DECIDE.</h2>
                    <button>SIGN UP TODAY</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default CTA