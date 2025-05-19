import "./recent.css";
import EasyBankLandingPage from "../../assets/easybank.png";
import Ecommerce from "../../assets/ecommerce.png";
import Projectgenius from "../../assets/projectgenius.png";
import CrowdFundindPage from "../../assets/crowdfunding.png";

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
            href="https://projectgenius.com.ng/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={Projectgenius}
              alt="project1"
              className="portfolio-image"
            />
          </a>
        </div>
        <div className="portfolio-container w-full md:w-2/5 m-8  cursor-pointer rounded-xl  flex flex-col justify-end items-center  relative">
          <a
            href="https://timbu-new-shop.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Ecommerce} alt="project1" className="portfolio-image" />
          </a>
        </div>

        <div className="portfolio-container w-full md:w-2/5 m-8  cursor-pointer rounded-xl  flex flex-col justify-end items-center  relative">
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
