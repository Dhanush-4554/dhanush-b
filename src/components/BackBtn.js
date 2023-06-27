import React from 'react'
import './BackBtn.css'
import { Link } from 'react-router-dom'

function BackBtn() {
  return (
    <Link to={"/"}><button className='backBtn'>Go Back</button></Link>
  )
}

export default BackBtn
