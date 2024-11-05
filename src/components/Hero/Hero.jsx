import "./hero.css";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
import { FiDownload } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import Image from "../../assets/image.png";
import CV from "../../assets/recentCv.pdf";

import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const { togglenav } = useContext(AppContext);

  return (
    <div className="relative">
      <div className="hi-container absolute hidden md:block w-full h-full ">
        <motion.h1
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="font-extrabold">
          HI
        </motion.h1>
      </div>

      {!togglenav ? (
        <AnimatePresence>
          <motion.div
            initial={{
              scaleY: 0,
              transformOrigin: "top",
            }}
            animate={{
              scaleY: 1,
              transformOrigin: "top",
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              scaleY: 0,
              transformOrigin: "top",
            }}
            className="navlinks-dropdown-container pl-8 py-10 lg:hidden absolute z-50 ">
            <ul className="Nav-links  lg:flex justify-center items-center gap-4">
              <li className="nav-underline cursor-pointer ">
                <a href="#work">Works</a>
              </li>
              <li className="nav-underline cursor-pointer ">
                <a href="#resume">Resume</a>
              </li>
              <li className="nav-underline cursor-pointer ">
                <a href="#skill">Skills</a>
              </li>
              <li className="nav-underline cursor-pointer ">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </motion.div>
        </AnimatePresence>
      ) : (
        <></>
      )}

      <div className="Hero-Container pb-12 ">
        <div className="hero-content flex flex-row flex-wrap relative z-30 ">
          <div className="name-job  ">
            <h1 className="Name  mb-3 "> I am Williams</h1>
            <h1 className="Job mb-3  md:text-5xl text-4xl">
              Web Developer + <br /> Programmer and
              <br />
              Educationist
            </h1>
            <p className="About hidden md:block">
              <br />
              Passionate web developer skilled in various
              <br />
              technologies and software, aiming to create
              <br />
              high-quality, user-focused digital experiences
              <br />
              through innovative projects and teamwork.
            </p>

            <div className="cv-and-social  hidden md:flex">
              <a href={CV} download>
                <motion.div
                  className="cv flex justify-center items-center"
                  whileHover={{
                    backgroundColor: "rgb(152, 105, 248)",
                    color: "white",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}>
                  Download CV <FiDownload className="ml-2" />
                </motion.div>
              </a>

              <div className="social-links flex justify-center items-center">
                <a
                  href="https://github.com/sirwes4062"
                  target="_blank"
                  rel="noopener noreferrer">
                  <motion.div
                    className="linkone"
                    whileHover={{
                      backgroundColor: "rgb(152, 105, 248)",
                      color: "white",
                      scale: 1.1,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}>
                    <IoLogoGithub />
                  </motion.div>
                </a>

                <a
                  href="www.linkedin.com/in/salifu-williams-7b449026b"
                  target="_blank"
                  rel="noopener noreferrer">
                  <motion.div
                    className="linkone"
                    whileHover={{
                      backgroundColor: "rgb(152, 105, 248)",
                      color: "white",
                      scale: 1.1,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}>
                    <FaLinkedinIn />
                  </motion.div>
                </a>

                <a
                  href="https://www.facebook.com/sirwes4062/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <motion.div
                    className="linkone"
                    whileHover={{
                      backgroundColor: "rgb(152, 105, 248)",
                      color: "white",
                      scale: 1.1,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}>
                    <FaFacebookF />
                  </motion.div>
                </a>

                <a
                  href="https://x.com/WilliamsSa95115/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <motion.div
                    className="linkone"
                    whileHover={{
                      backgroundColor: "rgb(152, 105, 248)",
                      color: "white",
                      scale: 1.1,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}>
                    <FaTwitter />
                  </motion.div>
                </a>
              </div>
            </div>
          </div>

          {/* big image */}
          <motion.div
            className="big-image mt-12 md:m-0  w-96 h-96"
            initial={{ rotateX: 0 }}
            animate={{ rotate: 5 }}
            whileHover={{
              rotate: 0,
              borderColor: "rgb(152, 105, 248)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}>
            <img src={Image} alt="Hero-image" />
          </motion.div>

          <div className="text-white pt-6  md:hidden block">
            Passionate web developer skilled in various technologies and
            software, aiming to create high-quality, user-focused digital
            experiences through innovative projects and teamwork.
          </div>

          <div className="cv-and-social-bottom  md:hidden flex flex-wrap mt-6 ">
            <motion.div
              className="cv-bottom flex justify-center items-center"
              whileHover={{
                backgroundColor: "rgb(152, 105, 248)",
                color: "white",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}>
              Download CV <FiDownload className="ml-1" />
            </motion.div>

            <div className="flex  mt-4 md:sm-0">
              <a
                href="https://github.com/sirwes4062"
                target="_blank"
                rel="noopener noreferrer">
                <motion.div
                  className="linkone-small"
                  whileHover={{
                    backgroundColor: "rgb(152, 105, 248)",
                    color: "white",
                    scale: 1.1,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}>
                  <IoLogoGithub />
                </motion.div>
              </a>

              <a
                href="www.linkedin.com/in/salifu-williams-7b449026b"
                target="_blank"
                rel="noopener noreferrer">
                <motion.div
                  className="linkone-small "
                  whileHover={{
                    color: "white",
                    scale: 1.1,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}>
                  <FaLinkedinIn />
                </motion.div>
              </a>

              <a
                href="https://www.facebook.com/sirwes4062/"
                target="_blank"
                rel="noopener noreferrer">
                <motion.div
                  className="linkone-small"
                  whileHover={{
                    backgroundColor: "rgb(152, 105, 248)",
                    color: "white",
                    scale: 1.1,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}>
                  <FaFacebookF />
                </motion.div>
              </a>

              <a
                href="https://x.com/WilliamsSa95115/"
                target="_blank"
                rel="noopener noreferrer">
                <motion.div
                  className="linkone-small"
                  whileHover={{
                    backgroundColor: "rgb(152, 105, 248)",
                    color: "white",
                    scale: 1.1,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}>
                  <FaTwitter />
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
