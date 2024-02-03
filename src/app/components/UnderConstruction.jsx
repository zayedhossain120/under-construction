import FloatingText from "./FloatingText";

const UnderConstruction = () => {
  return (
    <>
      <div className="mt-24 flex items-center justify-center flex-col  ">
        <h className="uppercase [font-size:_clamp(1.5em,4vw,2.7em)] md:tracking-[10px] lg:tracking-[15px] tracking-[8px] text-white  ">
          Under
        </h>
      </div>
      <FloatingText />
      <div className="mt-16">
        <p className="text-gray-400 text-center mt-4 [font-size:_clamp(0.8em,4vw,1em)]">
          We are coming soon with an interesting website
        </p>
      </div>
    </>
  );
};

export default UnderConstruction;
