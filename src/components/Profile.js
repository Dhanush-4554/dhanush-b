import React from 'react'
import './Profile.css'
import logo from './images/D.png'
import { Link } from 'react-router-dom';

function Profile() {

  return (
    <>
      <div className="profile_main2  profile_main2_">
        <img src={logo} alt="logo" className='logo' />
      </div>
      <div className='profile'>

        <div className="profile_main">
          <div className="profile_main1">
            <h1>QUICK LINKS</h1>
            <div className="main1sec1">
              <Link to={'/projects'}> <button className="btnProfile">PROJECTS</button></Link>
              <Link to={'/experience'}> <button className="btnProfile">EXPERIENCE</button></Link>
            </div>
            <div className="main1sec1">
            <Link to={'/education'}> <button className="btnProfile">EDUCATION</button></Link>
            <Link to={'/skills'}> <button className="btnProfile">SKILLS</button></Link>
            </div>
          </div>
          <div className="profile_main2">
            <img src={logo} alt="logo" className='logo' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
