import "./recent.css";
import CrowdFundindPage from "../../assets/crowdfund.png";
import EasyBankLandingPage from "../../assets/easybank.png";
import Ecommerce from "../../assets/ecommerce.png";
import Portfolio from "../../assets/portfolio.png";
// import { FaEye } from "react-icons/fa";
// import { IoLogoGithub } from "react-icons/io5";

const Recent = () => {
  return (
    <div
      className="recent-Container flex flex-wrap justify-center pt-16 "
      id="work">
      <h1 className="service-heading m-5  font-bold text-center text-5xl text-white mb-5 ">
        My Recent Works
      </h1>

      <div className="portfolio-containers flex flex-wrap justify-center">
        <div className="portfolio-container w-full md:w-2/5 m-8  cursor-pointer rounded-xl  flex flex-col justify-end items-center  relative">
          <a
            href="https://timbu-new-shop.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Ecommerce} alt="project1" className="portfolio-image" />
          </a>

          {/* pop-up hover container */}
          {/* <div className="hover-container flex w-11/12  h-28 rounded-xl absolute mb-2  p-2 ">
            <div className="w-2/3">
              <h1 className="text-white text-xl  font-bold">
                Timbu Shopping Store
              </h1>
              <p className="text-gray-400 font-bold">
                E-commerce shopping store with an product list,add to
                cart,product and a checkout page.
              </p>
            </div>

            <div className="w-1/3   flex justify-around items-center">
              <div className="preview  flex  flex-col justify-center items-center  ">
                <h6 className=" font-semibold  text-white">Preview</h6>
                <FaEye className="w-8 h-8" />
              </div>

              <div className="codes  flex flex-col justify-center items-center">
                <h3 className="font-semibold  text-white">Codes</h3>
                <IoLogoGithub className="w-8 h-8" />
              </div>
            </div>
          </div> */}
          {/* end of pop-up hover container */}
        </div>

        <div className="portfolio-container  w-full md:w-2/5 m-8 cursor-pointer">
          <a
            href="https://my-crowd-funding-page.netlify.app"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={CrowdFundindPage}
              alt="project3"
              className="portfolio-image"
            />
          </a>
        </div>

        <div className="portfolio-container   w-full md:w-2/5 m-8  cursor-pointer ">
          <img src={Portfolio} alt="project3" className="portfolio-image" />
        </div>

        <div className="portfolio-container w-full md:w-2/5 m-8  cursor-pointer">
          <a
            href="https://effervescent-chaja-12e895.netlify.app"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={EasyBankLandingPage}
              alt="project2"
              className="portfolio-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recent;
