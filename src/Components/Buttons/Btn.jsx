import React from "react";

const Btn = ({ githubUrl }) => {
  return (
    <a
      href={githubUrl}
      className="block font-medium"
    >
      View on GitHub
    </a>
  );
};

export default Btn;
