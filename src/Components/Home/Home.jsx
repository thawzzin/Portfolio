import React from "react";
import Header from "./Header";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home" className="hero h-screen md:px-10 px-5 relative">
      <Header />
      <main className="flex items-center h-full">
        <article className="md:w-1/2">
          <h5 className="uppercase font-medium ">Hi, I'm Thaw Zin</h5>
          <h1 className="uppercase font-bold text-5xl md:text-6xl mb-3 waviy">
            {/* I'm a frontend developer */}
            <span style={{ "--i": 1 }}>I'm</span>
            &nbsp;
            <span style={{ "--i": 2 }}>a</span>
            &nbsp;
            <div className="inline-block">

            <span style={{ "--i": 4 }}>f</span>
            <span style={{ "--i": 5 }}>r</span>
            <span style={{ "--i": 6 }}>o</span>
            <span style={{ "--i": 7 }}>n</span>
            <span style={{ "--i": 8 }}>t</span>
            <span style={{ "--i": 9 }}>e</span>
            <span style={{ "--i": 10 }}>n</span>
            <span style={{ "--i": 11 }}>d</span>
            </div>
            &nbsp;
            <br />
            <span style={{ "--i": 12 }}>d</span>
            <span style={{ "--i": 13 }}>e</span>
            <span style={{ "--i": 14 }}>v</span>
            <span style={{ "--i": 15 }}>e</span>
            <span style={{ "--i": 16 }}>l</span>
            <span style={{ "--i": 17 }}>o</span>
            <span style={{ "--i": 18 }}>p</span>
            <span style={{ "--i": 19 }}>e</span>
            <span style={{ "--i": 20 }}>r</span>
          </h1>
          <p>
            A frontend developer who write clean and efficient code and
            passionate about creating responsive and interactive web
            applications with great user experiences and also adept in
            collaborating with backend and design teams. Seeking more challenges
            and experiences.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1bKOPYUpdqd078VkLM2lgbyklks-PQrNJ"
            className="btn mt-5 py-1 inline-block"
          >
            Download CV
          </a>
        </article>
      </main>
      <div className="scroll">
        <img
          className="w-10 -mb-4"
          src={require("../../assets/icons/scroll.png")}
          alt="scroll icon"
        />
        <span> ^ </span>
      </div>
    </div>
  );
};

export default Home;
