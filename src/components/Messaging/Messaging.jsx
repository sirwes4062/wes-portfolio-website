import "./messaging.css";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

// #170e21   color for red error for non input

const Messaging = () => {
  return (
    <div
      id="contact"
      className="message-container flex flex-col lg:flex-row w-full p-2  md:p-24">
      {/* messaging section */}
      <div className="message w-full  lg:w-2/3  bg-[rgb(20,12,28)] p-2 md:p-12 rounded-lg ">
        <h1 className="message-header text-5xl  m-8">Let's Work together!</h1>

        <div className="input-container   w-full flex flex-col sm:flex-row justify-between">
          <input
            type="text"
            className=" w-full md:w-80 h-14 mb-4 bg-[#050709] rounded-lg text-white border-[#22272c] p-5 sm:mr-6 "
            placeholder="First name"
          />
          <input
            type="text"
            className="w-full md:w-80 h-14 mb-4 bg-[#050709] rounded-lg  text-white border-[#22272c]   p-5"
            placeholder="Last name"
          />
        </div>

        <div className="w-full  flex flex-col sm:flex-row justify-between  border-[#22272c]">
          <input
            type="text"
            className="w-full md:w-80  h-14 mb-4  bg-[#050709]  text-white rounded-lg   border-[#22272c]  p-5  sm:mr-6 "
            placeholder="Phone number"
          />
          <input
            type="text"
            className="w-full md:w-80 h-14 mb-4   bg-[#050709] rounded-lg text-white  border-[#22272c]  p-5"
            placeholder="Email Address "
          />
        </div>

        <select
          name="-Please choose an option-"
          className="w-full h-14 mb-4  bg-[#050709] rounded-lg text-white  border-[#22272c] px-5   "
          placeholder="-Please choose an option-">
          <option value="Job">Job/Gig</option>
          <option value="Internship">Internship</option>
          <option value="freelance">Freelance</option>
        </select>

        <textarea
          placeholder="Message "
          className="bg-[#050709] text-white w-full  h-40 p-5  rounded-lg  mb-4"
        />

        <button>
          <div className="send-button cursor-pointer  w-40 h-14 flex justify-center items-center text-[#ffffff] font-bold bg-[#40227a] rounded-full">
            Send Message
          </div>
        </button>
      </div>
      {/* end of messaging section */}

      {/* contact section */}
      <div className="contact-info w-full  md:p-6 flex flex-col justify-center mt-8 md:mt-0">
        <div className="logo-phone-no mb-4 flex">
          <div className="logo  w-12 h-12 rounded-full bg-[#8750f7]  flex justify-center items-center mr-4">
            <FiPhoneCall className="text-white text-2xl  " />
          </div>

          <div className="label-and-phone">
            <h1 className=" text-white  font-bold">Phone</h1>
            <h1 className=" text-white text-xl font-bold">07083288530</h1>
          </div>
        </div>

        {/* FOR LINEAR GRADIENT #472787 */}
        <div className="logo-phone-no mb-4 flex">
          <div className="logo  w-12 h-12 rounded-full bg-[#8750f7] flex justify-center items-center mr-4">
            <FaRegEnvelope className="text-white  text-2xl" />
          </div>

          <div className="label-and-phone">
            <h1 className=" text-white font-bold">Email</h1>
            <h1 className=" text-white text-xl font-bold">
              williamsenojo@gmail.com
            </h1>
          </div>
        </div>

        <div className="logo-phone-no mb-4 flex">
          <div className="logo  w-12 h-12 rounded-full bg-[#8750f7] flex justify-center items-center mr-4">
            <IoLocationOutline className="text-white   text-2xl" />
          </div>

          <div className="label-and-phone">
            <h1 className=" text-white  font-bold">Address</h1>
            <h1 className=" text-white text-xl font-bold">
              Alimosho Lagos,Nigeria
            </h1>
          </div>
        </div>
      </div>
      {/*end of contact section */}
    </div>
  );
};

export default Messaging;

// border-[rgb(152, 105, 248]
