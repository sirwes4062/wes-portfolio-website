import "./services.css";

const Services = () => {
  return (
    <div className="services-Container  md:px-10  py-20">
      <div className="heading  flex flex-col justify-center mb-10">
        <h1 className="service-heading font-bold text-center text-5xl m-auto  text-white mb-5 ">
          My Quality Service
        </h1>

        <p className="text-white text-center flex justify-center">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>

      <div className="quality-list text-white flex flex-col  justify-center">
        <div className="list  flex flex-col sm:flex-row justify-around py-3">
          <div className="flex items-center  ">
            <h1 className="text-2xl font-bold mr-4">Frontend Dev</h1>
          </div>

          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              <br />
              neque doloremque beatae aliquam debitis quia ipsa minus sapiente
            </p>
          </div>
        </div>

        <div className=" list flex flex-col sm:flex-row justify-around py-3">
          <div className="flex items-center ">
            <h1 className="text-2xl font-bold mr-4">Backend Dev</h1>
          </div>

          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              <br />
              neque doloremque beatae aliquam debitis quia ipsa minus sapiente
            </p>
          </div>
        </div>

        <div className=" list flex flex-col sm:flex-row justify-around py-3">
          <div className="flex items-center ">
            <h1 className="text-2xl font-bold  mr-4">Fullstack Dev</h1>
          </div>

          <div className="">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              <br />
              neque doloremque beatae aliquam debitis quia ipsa minus sapiente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
