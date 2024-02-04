import DarkBG from "@/asset/svg/DarkBG";
import Logo from "@/asset/svg/Logo";
import UnderConstruction from "./components/UnderConstruction";
import EmailInput from "./components/EmailInput";
import GetInTouch from "./components/GetInTouch";
import TypingText from "./components/TypingText";

export default function Home() {
  return (
    <main className="flex py-5 md:py-12 lg:py-12 px-5 justify-center w-full mx-auto relative overflow-hidden h-screen  ">
      {/* all background */}

      <div className="absolute h-[440px] w-[440px]  custom-gradient  "></div>
      <div className="   h-[350px] w-[350px] absolute top-[30%] bg-[#2A2430] rounded-full"></div>
      <div className="absolute top-[15%] mx-auto">
        <DarkBG />
      </div>
      <div className="absolute top-[15%] mx-auto">
        <DarkBG />
      </div>

      {/* all text start here */}
      <div className="relative ">
        {/* logo and company name */}
        <div className="flex items-center justify-center flex-col md:mt-8 lg:mt-10 mt-1">
          <div className=" mb-4">
            <Logo />
          </div>
          <h3 className="[font-size:_clamp(1.1em,4vw,1.5em)] text-white uppercase">
            EXPERT SQUAD
          </h3>
        </div>
        {/* typing text */}
        <TypingText />
        {/* under construction and small text */}
        <UnderConstruction />
        {/* email input and button */}
        <EmailInput colorS="[#201937]" ColorE="[#2132A3]" />
        {/* small text and company email */}
      </div>
      <GetInTouch />
    </main>
  );
}
