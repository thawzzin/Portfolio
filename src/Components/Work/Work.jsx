import React from "react";
import WorkCard from "./WorkCard";
import { projects } from "./Projects";

const Work = () => {
  return (
    <div id="work" className="text-black px-5 md:px-10 pt-10">
      <h1 className="text-center font-bold text-4xl md:text-5xl uppercase mb-10">
        Projects
      </h1>

      {projects.map((project, index) => (
        <WorkCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Work;
