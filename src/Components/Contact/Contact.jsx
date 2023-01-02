import React from "react";
import './Contact.scss'

const Contact = () => {
  return (
    <div id="contact" className=" py-10">
      <h1 className="text-center font-bold text-4xl md:text-5xl uppercase mb-10">
        Get in touch
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 md:w-[40%] mx-auto">
        <a href="mailto:thawzzin.dev@gmail.com" className="font-medium">
          Email: &nbsp; thawzzin.dev@gmail.com
        </a>
        <p className="md:text-end font-medium">Phone: &nbsp; 09788686252</p>
      </div>
      <div className="social flex justify-center gap-10 mt-10">
        <a href="https://www.facebook.com/profile.php?id=100015780607328">
          <img
            className="w-8 h-8"
            src={require("../../Assets/Icons/facebook.png")}
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com/t_zett1e/">
          <img
            className="w-8 h-8"
            src={require("../../Assets/Icons/instagram.png")}
            alt="instagram"
          />
        </a>
        <a href="https://www.linkedin.com/in/thaw-zin-876380253/">
          <img
            className="w-8 h-8"
            src={require("../../Assets/Icons/linkedin.png")}
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/Zett1e">
          <img
            className="w-8 h-8"
            src={require("../../Assets/Icons/github.png")}
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
