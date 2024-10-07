import "./footer.css";
import Logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <div className="footer-container flex justify-center items-center p-20  bg-[#140c1c]  ">
      <div>
        <img src={Logo} alt="footer-logo" className=" h-12  mb-6  m-auto" />

        <div className="footer-links">
          <ul className="flex mb-6 space-x-10">
            <a href="#work">
              <li className="text-white font-bold cursor-pointer">Work.</li>
            </a>

            <a href="#resume">
              <li className="text-white font-bold cursor-pointer">Resume.</li>
            </a>

            <a href="#skill">
              <li className="text-white font-bold  cursor-pointer">Skills.</li>
            </a>

            <a href="#contact">
              <li className="text-white font-bold cursor-pointer">Contact.</li>
            </a>
          </ul>
          <h1 className="text-center  font-bold   text-[#8734a2]">
            @2024 All Right reserved...
            <span className="font-bold text-[#78297f]"> Salifu Williams.</span>
          </h1>
        </div>

        {/* ARROW TO MOVE BACK TO THE HOME*/}
      </div>
    </div>
  );
};

export default Footer;
