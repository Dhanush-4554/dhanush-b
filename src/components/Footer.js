import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <h1 className="quote">
                " I try to be best version of myself "
            </h1>
            <div className='footer'>

                <div className="find">
                    <h3 className="find_me">
                        Find Me On :
                    </h3>
                    <p className='socials'>
                        <span className="social_media">LINKEDIN</span>
                        <span className='line'>⚊</span>
                        <span className="social_media">INSTAGRAM</span>
                        <span className='line'>⚊</span>
                        <span className="social_media">GITHUB</span>
                    </p>
                </div>
                <div className="find find_2">
                    <h3 className="find_me">
                        Extras :
                    </h3>
                    <p className='socials'>
                        <span className="social_media">EMAIL</span>
                        <span className='line'>⚊</span>
                        <span className="social_media">CONTACT</span>
                        <span className='line'>⚊</span>
                        <span className="social_media">RESUME</span>
                    </p>
                </div>
            </div>
            <div className="endOfFoot">
               <p>made with Love by Dhanush B</p>
               <p>&copy;2023 </p> 
            </div>
        </>
    )
}

export default Footer
