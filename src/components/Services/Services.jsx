import "./services.css";

const Services = () => {
  return (
    <div className="services-Container  md:px-10  py-20">
      <div className="heading  flex flex-col justify-center mb-10 px-4">
        <h1 className="service-heading font-bold text-center text-5xl m-auto  text-white mb-5 ">
          My Quality Service
        </h1>

        <p className="text-white text-center flex justify-center">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>

      <div className="quality-list text-white flex flex-col  justify-center  ">
        <div className="list  flex flex-col sm:flex-row justify-around py-3 px-4">
          <div className="flex items-center  ">
            <h1 className="text-2xl font-bold mr-4">Frontend Development</h1>
          </div>

          <div>
            <p>
              I builds the visual aspects of a website or app,
              <br />
              focusing on layout, design, and user interaction, using
              <br />
              mordern technologies and ensure a responsive and user-friendly
              <br />
              experience across devices
            </p>
          </div>
        </div>

        <div className=" list flex flex-col sm:flex-row justify-around py-3 px-4">
          <div className="flex items-center ">
            <h1 className="text-2xl font-bold mr-4">Backend Development</h1>
          </div>

          <div>
            <p>
              I manages the server, database, and application logic,
              <br />
              ensuring data processing, storage, and security.I also the various
              <br />
              link that enable functionality that supports the frontend.
            </p>
          </div>
        </div>

        <div className=" list flex flex-col sm:flex-row justify-around py-3 px-4">
          <div className="flex items-center ">
            <h1 className="text-2xl font-bold  mr-4">Fullstack Development</h1>
          </div>

          <div className="">
            <p>
              I works on both frontend and backend, bridging user interfaces
              <br />
              with underlying data and functionality. I also handle the
              <br />
              development, from creating responsive interfaces to managing
              <br />
              interactions and data storage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
