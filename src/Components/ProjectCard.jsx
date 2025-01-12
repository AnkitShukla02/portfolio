import React from 'react'
import project1 from '../assets/Images/projects/project1.jpg'
import { MdArrowOutward } from 'react-icons/md'
const ProjectCard = () => {
  return (
      <div className="projectItems">
        <div className="img-box flex">
          <img src={project1} alt="img" />
        </div>
        <div className="projectDetails mt-5">
          <h4><a href="#">NFT Dashboard Application Development.  <span className='arrowIcon'><MdArrowOutward /></span></a></h4>
        </div>
      </div>
  )
}

export default ProjectCard