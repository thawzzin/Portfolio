import React from "react";
import ArrowBtn from "../Buttons/ArrowBtn";
import "./WorkCard.scss";

const WorkCard = ({ project }) => {
  return (
    <div
      className="md:flex items-center gap-10 border-black last:border-none border-b-[1px] py-10 md:py-20
    "
    >
      <article className="md:w-[50%] mb-10 md:mb-0">
        <h2 className="text-4xl font-bold mb-3"> {project.title} </h2>
        <p> {project.description} </p>
        <div className="flex gap-5 mt-5">
          {project.libs.map((lib)=> <img className="w-7 h-7" src={lib} alt="icon" /> )}
        </div>
        <div className="flex md:gap-20 justify-between md:justify-start flex-wrap">
          <ArrowBtn title="View on GitHub" url={project.githubUrl} />
          <ArrowBtn title="View Live Demo" url={project.url} />
        </div>
      </article>
      <div className="relative">
        <div className="md:ml-10 rounded-2xl overflow-hidden border-black border-solid border-4 vid">
          <video autoPlay muted loop src={project.video}></video>
        </div>
        <div className="model w-60 absolute left-0 -bottom-5 -translate-x-28 md:block hidden">
          <img className="w-full" src={project.img} alt="3d model" />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
