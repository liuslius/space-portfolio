import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = ({ children }) => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Fun Games"
          description="The first project that i worked on."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Applications"
          description="Another project that I worked on."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Modern Websites"
          description="I made the site you are on right now"
        />
      </div>
    </div>
  );
};

export default Projects;
