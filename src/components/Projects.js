import React, { useState } from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'



function Projects() {
  const [cardInfo, setCardInfo] = useState({ title: "Amazon-Clone", description: "An E-commerce website that has all the key features of a shopping site (clone of amazon.in)", keys: "browsing products, adding items to a shopping cart, placing orders and user authentication", tech: "React.js, Firebase, CSS", linkWeb: "https://www.linkedin.com/posts/dhanush-b-469306249_reactjs-community-frontend-activity-7063064267721244673-WD7d?utm_source=share&utm_medium=member_desktop", linkCode: "https://github.com/Dhanush-4554/amazon-clone" });

  return (
    <>
    <div className='projects'>
      <div className="projects_left">
        <h1>MY WORK</h1>
        <div className="projects_leftName">
          {/* amazon  */}
          <Link className='link' to={'/amazon'} onClick={() => setCardInfo({ ...cardInfo, title: "AMAZON-CLONE", description: "E-commerce website that has all the key features of a shopping site (clone of amazon.in)", keys: "browsing products, adding items to a shopping cart, placing orders and user authentication", tech: "React.js, Firebase, CSS", linkWeb: "https://www.linkedin.com/posts/dhanush-b-469306249_reactjs-community-frontend-activity-7063064267721244673-WD7d?utm_source=share&utm_medium=member_desktop", linkCode: "https://github.com/Dhanush-4554/amazon-clone" })}  ><p># Amazon-clone</p></Link>

          {/* news app  */}
          <Link className='link' to={'/news'} onClick={() => setCardInfo({ ...cardInfo, title: "NEWS-MONK", description: "NEWS-MONK is a real-time news app that can be used for reading daily news", keys: "Real time content, News divided into different categories (like buisness, sports, etc), Loding spinner and loading bar, Infinite Scroll (as the user scroll, the news appears infinitely just like instagram reels or facebook page)", tech: "React.js, News-API, CSS, Bootstrap" , linkWeb: "https://github.com/Dhanush-4554/News-App", linkCode: "https://github.com/Dhanush-4554/News-App" })}><p># News-App</p></Link>

          {/* Text Utils  */}
          <Link className='link' to={'/text-utils'} onClick={() => setCardInfo({ ...cardInfo, title: "TEXT-UTILS", description: "TextUtils is a utility used to manipulate text as required by the user", keys: "Text Manipulation is the key feature of TextUtils - convert text to uppercase or lowercase, copy text, listen to text, count number of words and estimate the time required to read the text", tech: "React.js, Bootstrap, CSS", linkWeb: "https://my-best-text-utils.netlify.app/", linkCode: "https://github.com/Dhanush-4554/TextUtils" })}><p># Text-Utils</p></Link>

          {/* portfolio  */}
          <Link className='link' to={'/portfolio'} onClick={() => setCardInfo({ ...cardInfo, title: "PORTFOLIO", description: "Designed a PORTFOLIO WEBSITE for myself. This project helped me to keep track of my achievements and other details of my work.", keys: "It has well-organised, clean and responsive UI.", tech: "React.js, CSS", linkWeb: "#", linkCode: "#" })}><p># Portfolio</p></Link>

          {/* spotify  */}
          <Link className='link' to={'/spotify'} onClick={() => setCardInfo({ ...cardInfo, title: "SPOTIFY", description: "Spotify-Clone is a simple audio-player", keys: "audio player functionalities (play, pause, play-next, play-previous, play-list) and clean UI", tech: "HTML, CSS, JavaScript", linkWeb: "https://spotify-clone-4554.netlify.app/", linkCode: "https://github.com/Dhanush-4554/SpotifyCloneProject" })}><p># Spotify-clone</p></Link>

        </div>
      </div>
      <div className="projects_right">
      <div className="note">
            <p>Note: I am still first year student. More projects will be done and updated in future</p>
          </div>
        <div className="project_card">
          <h1 className="title">{cardInfo.title}</h1>
          <p className="description">{cardInfo.description}</p>
          <h1 className='key'>Key Features:</h1>
          <p className='key_features'>{cardInfo.keys}</p>
          <h1 className='key'>Tech Stack:</h1>
          <p className="tech_stacks">{cardInfo.tech}</p>
          <Link to={cardInfo.linkWeb} className='link'><button className='btn'>VIEW DEMO</button></Link>
          <Link to={cardInfo.linkCode} className='link'><button className='btn'>VIEW CODE</button></Link>
        </div>
      </div>
    </div>
 
          </>
  )
}

export default Projects
