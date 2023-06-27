import React from 'react'
import './Navbar.css'
import logo from './images/D.png'

function Navbar() {
  return (
    <>
     <img src={logo} alt="logo" className='logo1' />
    <div className='navbar'>

 
      {/* at left : fixing logo */}
      <div className="nav_left">
        <img src={logo} alt="logo" className='logo' />
      </div>


      {/* at right : adding navbar components */}
      <div className="nav_right">
        <p className="nav_component">HOME</p>
        <p className="nav_component">ABOUT</p>
        <p className="nav_component">SKILLS</p>
        <p className="nav_component">EDUCATION</p>
        <p className="nav_component">EXPERIENCE</p>
      </div>

      
    </div>
    </>
  )
}

export default Navbar
