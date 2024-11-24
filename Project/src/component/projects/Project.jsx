import React from 'react'
import portfolio from "../assets/portfolio.webp"
import restaurant from "../assets/restaurant1.jpg"
import weather from "../assets/weather.avif"

const Project = () => {
  return (
    <section className='projects' id='projects'>
        <h2 className="projecttitle">My <span>Projects</span></h2>
        <span className="projectdesc">
        I’ve designed and developed websites that are visually appealing and functional, providing a great user experience.
        </span>
        <div className="projectImgs">
            <img src={portfolio} alt="My Portfolio"  className='projectImg'/>
            <img src={restaurant} alt=""   className='projectImg'/>
            <img src={weather} alt=""   className='projectImg'/>
        </div>
    </section>
  )
}

export default Project
