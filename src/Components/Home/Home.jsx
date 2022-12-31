import React from "react";
import Header from "./Header";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home" className="hero h-screen md:px-10 px-5 relative">
      <Header />
      <main className="flex items-center h-full">
        <article className="md:w-1/2">
          <h5 className="uppercase font-medium">Hi, I'm Thaw Zin</h5>
          <h1 className="uppercase font-bold text-6xl mb-3">
            I'm a frontend developer
          </h1>
          <p>
            A frontend developer who write clean and efficient code and
            passionate about creating responsive and interactive web
            applications with great user experiences. I am seeking more
            challenges and experiences in front end development to enhance my
            skills.
          </p>
          <a href="/" className="btn mt-5 py-1 inline-block">
            Download CV
          </a>
        </article>
      </main>
      <div className="scroll">
        <img
          className="w-10 -mb-4"
          src={require("../../Assets/Icons/scroll.png")}
          alt="scroll icon"
        />
        <span> ^ </span>
      </div>
    </div>
  );
};

export default Home;
