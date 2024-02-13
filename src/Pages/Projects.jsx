import React from "react";
import project from "../Data/Projects.js";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="sm:mt-16 mt-24 w-screen py-5 px-40  sm:px-5 sm:w-full">
      <div className="flex  sm:flex-col justify-between">
        <span className="flex flex-col gap-5 pt-20">
          <h1>Projects</h1>
          <p>We have created some magic with our clients.</p>
        </span>
        <span>
          <img src="/images/project.png" width={400} className="sm:w-full sm:p-5"></img>
        </span>
      </div>
      <div className="flex flex-col gap-5 my-10">
        {project.map((project) => (
          <div key={project.id} className=" bg-gray-200 flex p-5 gap-5 ">
            <img src={project.img} width={300} className="sm:w-40 sm:h-36"></img>
            <span className="flex flex-col justify-between">
              <h1 className="text-2xl">{project.name}</h1>
              <p>{project.description.split(' ').slice(0, 20).join(' ')}...</p>
              <NavLink to={`/project/${project.id}`}>
              <Button style={{ backgroundColor: "#A8E4F9" }} className="w-40">View More</Button>
            </NavLink></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
