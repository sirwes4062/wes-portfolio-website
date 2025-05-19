import "./messaging.css";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Messaging = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Job/Gig"); // Default value
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus("Sending...");

    const serviceId = "service_7h0k02s";
    const templateId = "template_nb607pm";
    const publicKey = "_pAvXiv8KMCViKGog";

    // Removed unused templateParams to resolve the error

    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        setSubmissionStatus("Message sent successfully!");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setSubject("Job/Gig");
        setMessage("");
        setIsLoading(false);
      },
      (error) => {
        console.log("FAILED...", error.text);
        setSubmissionStatus("Failed to send message.");
        setIsLoading(false);
      }
    );
  };

  return (
    <div
      id="contact"
      className="message-container flex flex-col lg:flex-row w-full p-2  md:p-24">
      {/* messaging section */}
      <div className="message w-full  lg:w-2/3  bg-[rgb(20,12,28)] p-2 md:p-12 rounded-lg ">
        <h1 className="message-header text-5xl  m-8">Let's Work together!</h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="input-container   w-full flex flex-col sm:flex-row justify-between">
            <input
              type="text"
              className=" w-full md:w-80 h-14 mb-4 bg-[#050709] rounded-lg text-white border-[#22272c] p-5 sm:mr-6 "
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName" // Add name attribute for EmailJS sendForm
              required
            />
            <input
              type="text"
              className="w-full md:w-80 h-14 mb-4 bg-[#050709] rounded-lg  text-white border-[#22272c]   p-5"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              name="lastName" // Add name attribute for EmailJS sendForm
            />
          </div>

          <div className="w-full   flex flex-col sm:flex-row justify-between   border-[#22272c]">
            <input
              type="tel"
              className="w-full md:w-80   h-14 mb-4   bg-[#050709]   text-white rounded-lg   border-[#22272c]   p-5   sm:mr-6 "
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              name="phoneNumber" // Add name attribute for EmailJS sendForm
              required
            />
            <input
              type="email"
              className="w-full md:w-80 h-14 mb-4   bg-[#050709] rounded-lg text-white   border-[#22272c]   p-5"
              placeholder="Email Address "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email" // Add name attribute for EmailJS sendForm
              required
            />
          </div>

          <select
            name="subject" // Add name attribute for EmailJS sendForm
            className="w-full h-14 mb-4   bg-[#050709] rounded-lg text-white   border-[#22272c] px-5   "
            value={subject}
            onChange={(e) => setSubject(e.target.value)}>
            <option value="Job">Job/Gig</option>
            <option value="Internship">Internship</option>
            <option value="freelance">Freelance</option>
          </select>

          <textarea
            placeholder="Message "
            className="bg-[#050709] text-white w-full   h-40 p-5   rounded-lg   mb-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message" // Add name attribute for EmailJS sendForm
            required
          />

          <button type="submit" disabled={isLoading}>
            <div className="send-button cursor-pointer   w-40 h-14 flex justify-center items-center text-[#ffffff] font-bold bg-[#40227a] rounded-full">
              {isLoading && <div className="loader"></div>}
              {isLoading ? "Sending..." : "Send Message"}
            </div>
          </button>
          {submissionStatus && !isLoading && (
            <p className="text-white">{submissionStatus}</p>
          )}
        </form>
      </div>
      {/* end of messaging section */}

      {/* contact section */}
      <div className="contact-info w-full   md:p-6 flex flex-col justify-center mt-8 md:mt-0">
        <div className="logo-phone-no mb-4 flex">
          <div className="logo   w-12 h-12 rounded-full bg-[#8750f7]   flex justify-center items-center mr-4">
            <FiPhoneCall className="text-white text-2xl   " />
          </div>

          <div className="label-and-phone">
            <h1 className=" text-white   font-bold">Phone</h1>
            <h1 className=" text-white text-xl font-bold">07083288530</h1>
          </div>
        </div>

        {/* FOR LINEAR GRADIENT #472787 */}
        <div className="logo-phone-no mb-4 flex">
          <div className="logo   w-12 h-12 rounded-full bg-[#8750f7] flex justify-center items-center mr-4">
            <FaRegEnvelope className="text-white   text-2xl" />
          </div>

          <div className="label-and-phone">
            <h1 className=" text-white font-bold">Email</h1>
            <h1 className=" text-white text-xl font-bold">
              williamsenojo@gmail.com
            </h1>
          </div>
        </div>

        <div className="logo-phone-no mb-4 flex">
          <div className="logo   w-12 h-12 rounded-full bg-[#8750f7] flex justify-center items-center mr-4">
            <IoLocationOutline className="text-white     text-2xl" />
          </div>

          <div className="label-and-phone">
            <h1 className=" text-white   font-bold">Address</h1>
            <h1 className=" text-white text-xl font-bold">
              Alimosho Lagos,Nigeria
            </h1>
          </div>
        </div>
      </div>
      {/*end of contact section */}
      {/* Basic CSS for a simple loader (you can customize this) */}
      <style>
        {`
          .loader {
            border: 3px solid #f3f3f3; /* Light grey border */
            border-top: 4px solid #3498db; /* Blue border */
            border-radius: 50%;
            width: 15px;
            height: 15px;
            animation: spin 2s linear infinite;
            margin-right: 4px;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Messaging;
