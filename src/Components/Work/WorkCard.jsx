import React from "react";
import ArrowBtn from "../Buttons/ArrowBtn";
import "./WorkCard.scss";

const WorkCard = ({ project }) => {
  return (
    <div
      className="md:flex items-center gap-10 border-black last:border-none border-b-[1px] py-10 md:py-20
    "
    >
      <article
        className={`${
          project.type === "web" ? "md:w-[50%]" : "md:w-[40%]"
        } mb-10 md:mb-0 `}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          {" "}
          {project.title}{" "}
        </h2>
        <p className="2xl:text-xl"> {project.description} </p>
        <div className="flex gap-5 mt-5">
          {project.libs.map((lib) => (
            <img className="w-7 h-7" src={lib} alt="icon" />
          ))}
        </div>
        <div className="flex md:gap-20 justify-between md:justify-start flex-wrap">
          {project.githubUrl && (
            <ArrowBtn title="View on GitHub" url={project.githubUrl} />
          )}
          <ArrowBtn
            type={project.type}
            title="View Live Demo"
            url={project.url}
          />
        </div>
      </article>
      <div className="relative md:w-[60%]">
        <div className="flex justify-around">
          <div
            className={
              project.type === "mobile"
                ? "md:ml-10 md:w-60 md:h-[450px] w-32 h-56 rounded-2xl overflow-hidden border-black border-solid border-4 vid"
                : "md:ml-10 rounded-2xl overflow-hidden border-black border-solid border-4 vid"
            }
          >
            <video
              autoPlay
              muted
              loop
              src={project.video}
              className="w-full h-full object-fill"
            ></video>
          </div>
          <div
            className={
              project.type === "web"
                ? "hidden"
                : "md:ml-10 md:w-60 md:h-[450px] w-32 h-56 rounded-2xl overflow-hidden border-black border-solid border-4 vid"
            }
          >
            <video
              autoPlay
              muted
              loop
              src={project?.video2}
              className="w-full h-full object-fill"
            ></video>
          </div>
        </div>
        <div className="model w-60 absolute left-0 -bottom-5 -translate-x-28 md:block hidden">
          <img className="w-full" src={project.img} alt="3d model" />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
