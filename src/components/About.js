import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about'>
            <div className="smoke">
                <div className="text">Hey!</div>
                <svg width="0">
                    <filter id="filter">
                        <feTurbulence id="turbulence" type="fractalNoise" baseFrequency=".06" numOctaves="20" />
                        <feDisplacementMap in="SourceGraphic" scale="20" />
                    </filter>
                </svg>
            </div>
            <div className="Intro">
                <h1>Let Me Introduce Myself</h1>
            </div>
            <div className='Intro2'>
                <p>
                    I'm a Full-Stack Web Developer, curious and enthusiastic learner

                </p>
                <p>
                    Currently, I am focused on mastering MERN stack development and immersed in the fascinating world of machine learning and expanding my knowledge.
                </p>
                <button className="knowMoreBtn">
                    KNOW MORE
                </button>
            </div>
        </div>
    )
}

export default About
