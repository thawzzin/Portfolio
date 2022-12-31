import React from "react";
import WorkCard from "./WorkCard";
import dota2 from "../../Assets/Video/Dota2.mp4";
import shopit from "../../Assets/Video/shopit.mp4";
import { projects } from "./Projects";


const Work = () => {
  return (
    <div id="work" className="text-black px-5 md:px-10 pt-10">
      <h1 className="text-center font-bold text-5xl uppercase mb-10">
        Projects
      </h1>

      {projects.map((project, index) => (
        <WorkCard
        key={index}
          title={project.title}
          description={project.description}
          video={project.video}
          url={project.url}
          githubUrl={project.githubUrl}
          img={project.img}
        />
      ))}
    </div>
  );
};

export default Work;
