import React, { useState } from "react";
import "./Skill.scss";

const Skill = ({ icon, offset, next }) => {
  const [isHover, setIsHover] = useState(false);
  const smallMQuery = window.matchMedia("(max-width: 767px)").matches;
  const style = {
    strokeDashoffset: smallMQuery ? offset : isHover ? offset : 218,
    transitionDuration: "0.8s",
  };

  return (
    <div
      style={{
        transform: isHover ? "scale(1.2)" : "none",
        transitionDuration: "0.8s",
      }}
      className="relative inline-block"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="outer">
        <div className="inner">
          <div className={next ? "bg-white rounded-full" : null}>
            <img className="w-full h-full" src={icon} alt="icon" />
          </div>
        </div>
      </div>
      <svg width="90px" height="90px">
        <circle cx="45" cy="45" r="35" style={style} className="show-offset" />
      </svg>
    </div>
  );
};

export default Skill;
