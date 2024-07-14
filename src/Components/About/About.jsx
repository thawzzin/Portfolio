import React from "react";
import Skill from "./Skills/Skill";
import reactIcon from "../../assets/icons/react.png";
import jsIcon from "../../assets/icons/javascript.png";
import tsIcon from "../../assets/icons/typescript.png";
import reduxIcon from "../../assets/icons/redux.png";
import sassIcon from "../../assets/icons/sass.png";
import tailwindIcon from "../../assets/icons/tailwind.png";
import nextIcon from "../../assets/icons/nextjs.png";
import svelteIcon from "../../assets/icons/svelte.png";

const About = () => {
  return (
    <div
      id="about"
      className=" py-10 border-white border-b-[1px] border-opacity-50"
    >
      <h1 className="text-center font-bold text-4xl md:text-5xl uppercase mb-10">
        {" "}
        About Me{" "}
      </h1>
      <div>
        <div className="md:w-[70%] text-justify mx-auto">
          <h5 className="mb-5 font-medium text-center">
            {" "}
            I am Thaw Zin Tun, a frontend developer.{" "}
          </h5>
          <p>
            As a frontend developer, I have a strong foundation in HTML, CSS,
            JavaScript, and other frameworks and libraries and am skilled at
            building responsive and user-friendly websites and applications. I
            am always looking for ways to improve my skills and stay up-to-date
            on the latest technologies and best practices in the field.
          </p>
          <br />
          <p>
            I am a computer science student from University of Yangon, and have
            completed a number of courses and certifications to enhance my
            knowledge and skills as a developer. I have also gained valuable
            experience working on a variety of frontend development projects as
            part of my studies and internship. I am highly motivated and proactive in my
            learning, and am always looking for opportunities to grow and
            improve as a developer.
          </p>
          <br />
          <p>
            I am confident in my ability to learn quickly and adapt to new
            technologies and challenges. I am a fast learner with strong
            problem-solving skills, and believe that my passion for frontend
            development and my willingness to learn and grow make me an asset to
            any team.
          </p>
          <br />
        </div>
        <div className="w-[80%] mx-auto">
          <h3 className="text-center font-bold text-3xl uppercase my-10">
            Skills
          </h3>
          <div className="flex justify-center gap-10 flex-wrap">
            <Skill icon={jsIcon} offset={30} />
            <Skill icon={reactIcon} offset={50} />
            <Skill icon={nextIcon} offset={120} next={true} />
            <Skill icon={svelteIcon} offset={120} />
            <Skill icon={tsIcon} offset={90} />
            <Skill icon={reduxIcon} offset={80} />
            <Skill icon={sassIcon} offset={60} />
            <Skill icon={tailwindIcon} offset={70} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
