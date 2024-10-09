import "./experience.css";
import { motion } from "framer-motion";
import { SlBadge } from "react-icons/sl";
import { PiGraduationCapBold } from "react-icons/pi";

const Experience = () => {
  return (
    <div
      id="resume"
      className="Experience-Eduction-Container flex flex-col md:flex-row py-20 justify-center w-full">
      <div className="">
        <motion.div
          animate={{
            y: "-20px",
          }}
          initial={{
            y: "0",
          }}
          transition={{
            duration: "0.7",
          }}
          className="experience-heading flex pl-8 ">
          <SlBadge className="badge-icon mr-2 text-white" />
          <h1 className="text-white">My Experience</h1>
        </motion.div>

        <motion.div
          animate={{
            x: "2rem",
            transition: {
              delay: "1",
            },
          }}
          initial={{
            x: "0",
          }}
          transition={{
            duration: "0.7",
          }}
          className="exprience-no  flex flex-col justify-center items-center my-6 mr-16 cursor-pointer p-1 ">
          <h1 className="experience-header text-center text-xl  md:text-2xl font-bold">
            2022 Side Hustle Internship
          </h1>
          <p className="experience-paragraph-one  sm:text-xl font-bold ">
            Frontend Developer (React js)
          </p>
          <p className="experience-paragraph ">Lagos Nigeria (remote)</p>
        </motion.div>

        <motion.div
          animate={{
            x: "2rem",
            transition: {
              delay: "1.2",
            },
          }}
          initial={{
            x: "0",
          }}
          transition={{
            duration: "0.7",
          }}
          className="exprience-no  flex flex-col justify-center items-center my-6 mr-16 cursor-pointer p-1">
          <h1 className="experience-header text-center text-xl  md:text-2xl  font-bold">
            2022 Certificate of completion
          </h1>
          <p className="experience-paragraph-one sm:text-xl font-bold ">
            Backend Developer (Node js)
          </p>
          <p className="experience-paragraph ">Zaria,Nigeria Remote</p>
        </motion.div>

        <motion.div
          animate={{
            x: "2rem",
            transition: {
              delay: "1.4",
            },
          }}
          initial={{
            x: "0",
          }}
          transition={{
            duration: "0.7",
          }}
          className="exprience-no  flex flex-col justify-center items-center my-6 mr-16 cursor-pointer p-1">
          <h1 className="experience-header text-center  text-xl  md:text-2xl  font-bold">
            myScholarship.ng internship
          </h1>
          <p className="experience-paragraph-one sm:text-xl  font-bold ">
            Frontend developer(React js)
          </p>
          <p className="experience-paragraph ">Lagos,Nigeria (Remote)</p>
        </motion.div>
      </div>

      <div className="Education-section ">
        <motion.div
          animate={{
            y: "-20px",
          }}
          initial={{
            y: "0",
          }}
          transition={{
            duration: "0.7",
          }}
          className="education-heading flex  pl-8">
          <PiGraduationCapBold className="graduation-icon mr-2   text-white" />
          <h1 className="text-white"> My Education</h1>
        </motion.div>

        <motion.div
          animate={{
            x: "-2rem",

            transition: {
              delay: "1.6",
            },
          }}
          initial={{
            x: "0",
          }}
          transition={{
            duration: "0.7",
          }}
          className="exprience-no flex flex-col justify-center items-center my-6  ml-16 cursor-pointer p-1">
          <h1 className="experience-header  text-xl  md:text-2xl font-bold">
            2020 - date
          </h1>
          <p className="experience-paragraph-one sm:text-xl  text-center font-bold px-2 ">
            Electrical Engineering
          </p>
          <p className="experience-paragraph font-bold">
            ( Power and Machines)
          </p>
          <p className="experience-paragraph">Ahmadu bello university,Zaria </p>
        </motion.div>

        <motion.div
          animate={{
            x: "-2rem",

            transition: {
              delay: "1.8",
            },
          }}
          initial={{
            x: "0",
          }}
          transition={{
            duration: "0.7",
          }}
          className="exprience-no flex flex-col justify-center items-center my-6  ml-16 cursor-pointer p-1">
          <h1 className="experience-header   text-xl  md:text-2xl font-bold">
            2024 - date
          </h1>
          <p className="experience-paragraph-one sm:text-xl  text-center font-bold px-2 ">
            Computing track (Huawei Ict competition)
          </p>
          <p className="experience-paragraph font-bold sm:text-xl ">
            (OpenEuler,OpenGuass and Kunpeng)
          </p>
          <p className="experience-paragraph sm:text-xl ">
            Ahmadu bello university,Zaria{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
