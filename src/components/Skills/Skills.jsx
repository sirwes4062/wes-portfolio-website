import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { SiFortran } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skill"  className="w-full p-10 bg-[#0f0715] flex flex-col justify-center items-center ">
      <div className="header-and-paragraph">
        <h1 className=" text-5xl  font-semibold text-center ">My Skills</h1>
        <p className="text-center text-[#fdfdfe] ">
          These are some of the various and latest <br />
          technologies in which have worked with along the times past
        </p>
      </div>

      <div className=" flex flex-wrap gap-8   justify-center items-center mt-8">
        <div className="w-40 h-40  skill-container   cursor-pointer bg-[#191217] rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <FaHtml5 className="html-font w-14 h-14 mb-8" />
          <h1>Html</h1>
        </div>
        <div className="w-40 h-40   skill-container  cursor-pointer  bg-[#191217] rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <FaCss3Alt className="css-font  w-14 h-14 mb-8" />
          <h1>CSS</h1>
        </div>
        <div className="w-40 h-40  skill-container   cursor-pointer bg-[#191217]  rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <FaJs className=" js-font w-14 h-14 mb-8" />
          <h1>Javascript</h1>
        </div>
        <div className="w-40 h-40 skill-container   cursor-pointer bg-[#191217] rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <FaReact className="react-font  w-14 h-14 mb-8" />
          <h1>React</h1>
        </div>
        <div className="w-40 h-40  skill-container  cursor-pointer  bg-[#191217] rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <BiLogoRedux className="redux-font  w-14 h-14 mb-8" />
          <h1>Redux</h1>
        </div>

        <div className="w-40 h-40  skill-container   bg-[#191217] rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <BiLogoTailwindCss className="tailwind-font w-14 h-14 mb-8" />
          <h1>Tailwind</h1>
        </div>
        <div className="w-40 h-40 skill-container cursor-pointer  bg-[#191217]  rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <FaBootstrap className=" bootstrap-font w-14 h-14 mb-8" />
          <h1>Bootstrap</h1>
        </div>
        <div className="w-40 h-40  skill-container cursor-pointer  bg-[#191217] rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <FaGithub className="git-font w-14 h-14 mb-8" />
          <h1>Git/Github</h1>
        </div>

        <div className="w-40 h-40 skill-container cursor-pointer   bg-[#191217] rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <FiFramer className="framer-font w-14 h-14   mb-6" />
          <h1>Framer motion</h1>
        </div>

        <div className="w-40 h-40 skill-container cursor-pointer   bg-[#191217] rounded-3xl mb-16 flex flex-col  justify-center items-center">
          <SiFortran className="fortran-font w-14 h-14   mb-6" />
          <h1>Fortran</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;

// SiFortran
