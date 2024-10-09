import { useContext } from "react";
import { AppContext } from "../AppProvider";
import Logo from "../../assets/logo.jpeg";
import "./navbar.css";
import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const { togglenav, setTogglenav } = useContext(AppContext);

  const handleMenuClick = () => {
    setTogglenav(false);
    console.log("from handle click menu");
  };

  const togglecross = () => {
    setTogglenav(true);
    console.log("from toggle cross");
  };

  return (
    <>
      <div
        id="home"
        className="Navbar-Container flex py-4 px-2 md:px-8 justify-between xl:justify-around ">
        <div className="brand-logo-email flex">
          <a href="#home">
            <img src={Logo} alt="brand-logo" className="brand-logo mr-6" />
          </a>
          <div className="brand-email flex items-center">
            <h1 className="email font-extralight hidden md:block  ">
              williamseneojo@gmail.com
            </h1>
          </div>
        </div>

        <ul className="Nav-links hidden  lg:flex justify-center items-center gap-4">
          <li className="nav-underline cursor-pointer">
            <a href="#work">Works</a>
          </li>
          <li href="resume" className="nav-underline cursor-pointer">
            <a href="#resume">Resume</a>
          </li>
          <li href="skill" className="nav-underline cursor-pointer">
            <a href="#skill">Skills</a>
          </li>
          <li href="contact" className="nav-underline cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="hamburger-hire flex justify-around items-center">
          <a href="#contact">
            <div className="hire-button flex justify-center items-center">
              Hire me!
            </div>
          </a>
          {togglenav ? (
            <div
              className="hamburger lg:hidden flex flex-col  justify-between"
              onClick={handleMenuClick}>
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
          ) : (
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotate: "45deg" }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}>
              <FaPlus className="plus-drop" onClick={togglecross} />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
