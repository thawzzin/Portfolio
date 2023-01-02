import React from "react";
import Skill from "./Skills/Skill";
import reactIcon from "../../Assets/Icons/react.png";
import jsIcon from "../../Assets/Icons/javascript.png";
import tsIcon from "../../Assets/Icons/typescript.png";
import reduxIcon from "../../Assets/Icons/redux.png";
import sassIcon from "../../Assets/Icons/sass.png";
import tailwindIcon from "../../Assets/Icons/tailwind.png";

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
        {/* <div className="mx-auto w-40 h-40 mb-5">
          <img
            src={require("../../Assets/Image/profile.jpg")}
            alt="Profile"
            className="rounded-[50%] w-full h-full object-cover"
          />
        </div> */}
        <div className="md:w-[70%] text-justify mx-auto">
          <h5 className="mb-5 font-medium text-center">
            {" "}
            My name is Thaw Zin Tun and I'm a frontend developer based in Yangon{" "}
          </h5>
          <p>
            As a frontend developer, I have a strong foundation in HTML, CSS,
            JavaScript, and other frameworks and libraries and am skilled at
            building responsive and user-friendly websites and applications. I
            am always looking for ways to improve my skills and stay up-to-date
            on the latest technologies and best practices in the field and am
            eager to learn more and put my skills to use in real-world projects.
          </p>
          <br />
          <p>
            I am a computer science student from University of Yangon, and have
            completed a number of courses and certifications to enhance my
            knowledge and skills as a developer. I have also gained valuable
            experience working on a variety of frontend development projects as
            part of my studies. I am highly motivated and proactive in my
            learning, and am always looking for opportunities to grow and
            improve as a developer.
          </p>
          <br />
          <p>
            While I do not have professional experience as a frontend developer,
            I am confident in my ability to learn quickly and adapt to new
            technologies and challenges. I am a fast learner with strong
            problem-solving skills, and believe that my passion for frontend
            development and my willingness to learn and grow make me an asset to
            any team.
          </p>
          <br />
          <p>
            I am excited to begin my career as a frontend developer and to
            contribute my skills and enthusiasm to projects that make a
            difference.
          </p>
        </div>
        <div className="w-[80%] mx-auto">
          <h3 className="text-center font-bold text-3xl uppercase my-10">
            Skills
          </h3>
          <div className="flex justify-center gap-10 flex-wrap">
            <Skill icon={jsIcon} offset={30} />
            <Skill icon={reactIcon} offset={50} />
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
