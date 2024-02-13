import React from 'react'
import { useParams } from 'react-router-dom'
import projects from "../Data/Projects.js";

const ProjectDes = () => {
    const {id}= useParams()
    
    const projectId = parseInt(id);

    const project = projects.find(project => project.id === projectId);
    
    return (
    <div className="sm:mt-18 mt-24 w-full py-5 px-40 sm:px-5">
    <p className='text-center'>Projets</p>
    {project ? (
        <>
          <h1 className='text-center py-5'>{project.name}</h1>
          <p>{project.description}</p>
          <img src={project.lead} className='m-auto p-10'></img>
          <p>{project.description2}</p>

          <h1 className='text-2xl py-5'>Built With</h1>
          <p className='py-5 font-bold'>
            {project.framework}
          </p>
          <img src={project.img} className='m-auto p-10'></img>

        </>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  )
}

export default ProjectDes