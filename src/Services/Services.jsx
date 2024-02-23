import React from 'react'
import './Services.css'
import servicesImg from '../assets/3.png'

function Services() {
    return (
        <section className="services">
                <img alt='services-img' src={servicesImg} />
                <div className='services-content'>
                    <div className='left-side'>
                        <h1>ACHIVE<br/>YOUR FITNESS<br />GOALS</h1>
                        <p>Everybody is different, so we make sure you can choose a plan that works best for you.</p>
                    </div>
                    <div className="right-side">
                        <ul>
                            <li>
                                <h2>Goal<br/>Setting</h2>
                            </li>
                            <li>
                                <h2>Tracking<br/>Progress</h2>
                            </li>
                            <li>
                                <h2>Calorie<br/>Optimization</h2>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <p>Whether you're aiming to lose weight, build muscle, or maintain a healthy lifestyle, WellnessMagnet simplifies the goal-setting process. Our app provides personalized workout plans tailored to each specific goal, ensuring that you embark on a fitness journey designed just for you.</p>
                            </li>
                            <li>
                                <p>Train like a champion while monitoring your progress every step of the way. With WellnessMagnet, you can track your workouts with precision, allowing you to adjust your pace and intensity. Whether you prefer a dynamic and challenging routine or a gradual, steady approach, our app empowers you to achieve your fitness objectives.</p>
                            </li>
                            <li>
                            <p>Achieving your fitness goals involves more than just exercise; it's about maintaining a balanced lifestyle. WellnessMagnet helps you track your calorie intake based on your specific goals. Whether you're aiming to shed pounds, gain muscle, or simply adopt a healthier way of living, our app provides insights to support your nutritional journey.</p>
                            </li>
                        </ul>
                    </div>
                </div>
        </section>
    )
}

export default Services