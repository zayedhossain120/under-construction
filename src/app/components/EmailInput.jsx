import React from "react";

const EmailInput = () => {
  return (
    <>
      {/* /// test button */}

      <div class="flex items-center justify-center mt-10">
        <div class="relative w-full">
          <input
            type="text"
            class="rounded-full bg-[#2A2430] text-white outline-none hover:border hover:border-r-0 border-r-0  border border-transparent hover:border-gray-400 py-3 pl-5 w-full focus:border-gray-400
             "
            placeholder="Enter your email"
          />
          <button class="absolute inset-y-0 right-0  button-custom-color  text-white rounded-e-full m-[1px] px-6     ">
            Notify Us
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailInput;
