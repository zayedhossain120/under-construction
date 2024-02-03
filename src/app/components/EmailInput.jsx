import React from "react";

const EmailInput = () => {
  return (
    <div className="mt-12  text-center group min-w-fit   ">
      <input
        type="email"
        className="rounded-s-full bg-[#2A2430] py-3 md:pl-8 md:pr-9 lg:pl-8 lg:pr-9 pl-5 pr-5 text-white outline-none group-hover:border group-hover:border-r-0 border-r-0  border border-transparent group-hover:border-gray-400   "
        placeholder="Enter your email"
      />
      <button className=" button-custom-color py-3 md:px-12 lg:px-12 px-5 text-white rounded-e-full group-hover:border group-hover:border-l-0 border-l-0  border border-transparent group-hover:border-gray-400    ">
        Notify us
      </button>
    </div>
  );
};

export default EmailInput;
