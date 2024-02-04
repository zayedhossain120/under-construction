import FloatingText from "./FloatingText";

const UnderConstruction = () => {
  return (
    <>
      <div className="mt-12 md:mt-10 lg:mt-10 flex items-center justify-center flex-col font-krylon  ">
        <h className="uppercase [font-size:_clamp(1.5em,4vw,2.7em)] md:tracking-[10px] lg:tracking-[15px] tracking-[8px] text-white  ">
          Under
        </h>
      </div>
      <FloatingText />
      <div className="md:my-10 lg:my-10 my-6  ">
        <p className="text-gray-400 text-center [font-size:_clamp(0.8em,4vw,1em)]  ">
          We are coming soon with an interesting website
        </p>
      </div>
    </>
  );
};

export default UnderConstruction;
