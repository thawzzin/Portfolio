import React from "react";
import "./Btn.scss";

const ArrowBtn = ({ title, url,type }) => {
  return (
    <div className={type === 'mobile' ? 'hidden' : null}>
      <a
        href={url}
        className="inline-block mt-5 border-b-2 border-solid border-black md:py-1 font-medium hover:translate-y-[2px] duration-200"
      >
        {title} &rarr;
      </a>
    </div>
  );
};

export default ArrowBtn;
