import React from 'react'
import './Home.css'



function Home() {
  return (
    <div className='home'>
      <div className="first">
        <div>
          <h1 className="home_myName">
            DHANUSH B
          </h1>
          <p className='home_belowMyName'>&#9866; WEB DEVELOPER</p>
        </div>
        <div>
          <p className='home_code'>&#9866; CODE WITH COFFEE</p>
          <h1 className="home_cp cp_1">
            COMPITITIVE
          </h1>
          <h1 className="home_cp cp_2">
            PROGRAMMER
          </h1>
        </div>
   

      </div>
      <div className="arrowScroll">
      <p className='arrow'>&dArr;</p>
      <p className='scroll'>scroll!</p>
      </div>
    </div>
  )
}

export default Home
