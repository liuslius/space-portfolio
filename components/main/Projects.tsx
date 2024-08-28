import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
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
          href="https://shopping-cart-budget-helper.glitch.me"
          src="/public/shopping-cart.png"
          title="Interactive Applications"
          description="A shopping cart helper: helps you stick to your budget, and save time at checkout."
        />
        <ProjectCard
          src="/public/CardImage.png"
          title="Fun Games"
          description="Another project that I worked on."
        />
        <ProjectCard
          src="/public/SpaceWebsite.png"
          title="Modern Websites"
          description="I made the site you are on right now"
        />
      </div>
    </div>
  );
};

export default Projects;
