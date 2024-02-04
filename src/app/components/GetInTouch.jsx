import React from "react";

const GetInTouch = () => {
  return (
    <div className=" absolute   flex items-center justify-center flex-col bottom-10  ">
      <p className="text-gray-500 text-center ">Get In Touch</p>
      <h4 className="text-white [font-size:_clamp(1.2em,4vw,1.5em)]  text-center hover:border-b max-w-fit  font-vanilla   ">
        <a href="mailto:hello@expertsquad.net?cc=expertsquades@gmail.com, ">
          hello@expertsquad.net
        </a>
      </h4>
    </div>
  );
};

export default GetInTouch;
