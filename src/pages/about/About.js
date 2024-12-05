import React from 'react'
import './About.css'
import Field from '../../components/aboutfield/Field'
const About = () => {
  return (
    <div className='about'>
        <h1>Get to Know More</h1>
        <h2> About Me</h2>
        <p>I'm currently an undergraduate student in Computer Science with a strong drive 
          to push my limits and explore new challenges. While my passion lies in software development, 
          I also have a deep love for the outdoors, where I find inspiration beyond the screen. I am working 
          on my Web Development skills for now, and looking for internship to put those skills at use and learn something new.</p>
        <div className='main'>
          <div className='image'></div>
          <div className='education'>
          <h1>Education</h1>
          <div className='educations'>
          <h3> B.Tech - Computer Science Enginnering </h3>
            <h2> Delhi Technological university, New Delhi, India</h2>
            <h2> CGPA : 7.04</h2>
            <hr></hr>
            <h3> Class 12 - CBSE </h3>

            <h2> Delhi Public School, J&K, India</h2>
            <h2> Percentage: 81.4%</h2>
            <hr></hr>
            <h3> Class 10 - CBSE </h3>
            <h2> Delhi Public School, J&K, India</h2>
            <h2> Percentage: 80.0%</h2>
       
          </div>
          </div>
        </div>
      
    </div>
  )
}

export default About
