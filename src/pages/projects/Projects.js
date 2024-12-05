import React from 'react'
import Card from '../../components/Card'
import './Projects.css'
import img1 from '../../assets/TalkATiveProject2.png'
import img2 from '../../assets/SortingVisProject1.png'
import img3 from '../../assets/project3.png'
const Projects = () => {
  return (
    <div className='wrapper'>

      <div className='texts'>
      <h2>Browse my recent</h2>
      <h1>Projects</h1>
      </div>
      <div className='Cards'>
         <Card name="Talk-a-Tive" imageUrl={img1} githubLink="https://github.com/Rijult33/cpu-scheduling-visualizer " liveLink="https://talk-a-tive-7fgq.onrender.com/"></Card>
        <Card name="Sorting Visualiser" imageUrl={img2} githubLink="https://github.com/saarthaks19/SortingVisualizer" liveLink="https://sorting-visualizer-five-eta.vercel.app "></Card>
        <Card name="My Portfolio" imageUrl={img3} githubLink="https://github.com/Rijult33/myPortfolio" liveLink=""></Card>
      </div>
    </div>
  )
}

export default Projects
