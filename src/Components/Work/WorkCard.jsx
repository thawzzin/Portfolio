import React from "react";
import ArrowBtn from "../Buttons/ArrowBtn";
import Btn from "../Buttons/Btn";
import './WorkCard.scss'


const WorkCard = ({ title, description, video,url,githubUrl,img }) => {
  return (
    <div className="md:flex items-center gap-10 border-black last:border-none border-b-[1px] py-10 md:py-20
    ">
      <article className="md:w-[50%] mb-10 md:mb-0">
        <h2 className="text-4xl font-bold mb-3"> {title} </h2>
        <p> {description}  </p>
        <div className="flex md:gap-20 justify-between md:justify-start">

        <ArrowBtn
          title="View on GitHub"
          url={githubUrl}
        />
        <ArrowBtn
          title="View Live Demo"
          url={url}
        />
        </div>
      </article>
      <div className="relative">
        <div className="md:ml-10 rounded-2xl overflow-hidden border-black border-solid border-4 vid">
          <video autoPlay muted loop src={video}></video>
        </div>
        <div className="model w-60 absolute left-0 -bottom-5 -translate-x-28 md:block hidden">
        <img className="w-full" src={img} alt="3d model" />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
