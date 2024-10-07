import "./recent.css";
import CrowdFundindPage from "../../assets/crowdfund.png";
import EasyBankLandingPage from "../../assets/easybank.png";
import Ecommerce from "../../assets/ecommerce.png";

const Recent = () => {
  return (
    <div className="recent-Container  flex flex-wrap justify-center pt-16 "  id="work">
      <h1 className="service-heading m-5  font-bold text-center text-5xl text-white mb-5 ">
        My Recent Works
      </h1>

      <div className="portfolio-containers flex   flex-wrap justify-center">
        <div className="portfolio-container w-full  sm:w-2/3 md:w-1/3  m-2">
          <img src={Ecommerce} alt="project1" className="portfolio-image" />
        </div>

        <div className="portfolio-container w-full  sm:w-2/3 md:w-1/3   m-2   ">
          <img
            src={EasyBankLandingPage}
            alt="project2"
            className="portfolio-image"
          />
        </div>
        <div className="portfolio-container w-full  sm:w-2/3 md:w-1/3  m-2 ">
          <img
            src={CrowdFundindPage}
            alt="project3"
            className="portfolio-image"
          />
        </div>

        <div className="portfolio-container  w-full  sm:w-2/3 md:w-1/3  m-2 ">
          <img
            src={CrowdFundindPage}
            alt="project3"
            className="portfolio-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Recent;
