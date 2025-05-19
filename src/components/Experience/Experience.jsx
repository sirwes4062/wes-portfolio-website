import "./experience.css";
import { motion } from "framer-motion";
import { SlBadge } from "react-icons/sl";
import { PiGraduationCapBold } from "react-icons/pi";

const Experience = () => {
  return (
    <div
      id="resume"
      className=" Experience-Education-Container flex flex-col md:flex-row py-20 justify-center w-full">
      <div className="w-ful md:w-1/2">
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
          className="experience-heading flex justify-center items-center">
          <SlBadge className="badge-icon mr-2 text-white text-4xl  md:text-12xl " />
          <h1 className="text-white text-3xl sm:text-5xl">Certifications</h1>
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
            Huawei Certified ICT Associate
          </h1>
          <p className="experience-paragraph-one  sm:text-xl font-bold ">
            Issued Apr 2025 · Expires Apr 2028
          </p>
          <p className="experience-paragraph font-bold">
            HCIA OpenEuler Certificate
          </p>
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
            2023 Certificate of completion
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
      </div>

      <div className="Education-section w-full md:w-1/2">
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
          className="education-heading flex  pl-8  mt-8 sm:mt-0 ">
          <PiGraduationCapBold className="graduation-icon mr-2  text-4xl  md:text-12xl  text-white  " />
          <h1 className="text-white text-3xl sm:text-5xl">
            Education / Experience
          </h1>
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
            15/01/2020 to Date
          </h1>
          <p className="experience-paragraph-one sm:text-xl  text-center font-bold px-2 ">
            B.Eng Electrical Engineering
          </p>
          <p className="experience-paragraph font-bold text-center">
            ( Power and Systems Eng.,Electric Machines,Telecomm and Control
            Eng.)
          </p>
          <p className="experience-paragraph">
            Ahmadu bello university,Zaria Kaduna State
          </p>
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
            15/09/2024 to date
          </h1>
          <p className="experience-paragraph-one sm:text-xl  text-center font-bold px-2 ">
            Fulfilment By Experience (FBX)
          </p>
          <p className="experience-paragraph font-bold ">
            Frontend Developer (Volunteer)
          </p>
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
            01/10/2024 to Date
          </h1>
          <p className="experience-paragraph-one sm:text-xl  text-center font-bold px-2 ">
            Project Genius Internship (Volunteer)
          </p>
          <p className="experience-paragraph font-bold ">
            Frontend Developer (Remote)
          </p>
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
            2/02/2025 - 28/02/2025
          </h1>
          <p className="experience-paragraph-one sm:text-xl  text-center font-bold px-2 ">
            Huawei Ict competition Bootcamp
          </p>
          <p className="experience-paragraph font-bold text-center">
            Computing track (OpenEuler,OpenGauss and Kunpeng Computing )
          </p>
          <p className="experience-paragraph">
            Huawei ICT Academy ABU, Zaria Chapter
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
