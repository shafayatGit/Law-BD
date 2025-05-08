import React from "react";
import { CiCircleAlert } from "react-icons/ci";
import { Link, useLoaderData, useParams } from "react-router";
import { addBookmark } from "../Utility";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp } from "./MotionVarients";

// import { toast } from "react-toastify";
// import { toast, ToastContainer } from "react-toastify";

const DoctorDetails = () => {
  const details = useLoaderData();
  // console.log(details);
  const { license_number } = useParams();
  // console.log(license_number);
  const singleDoctor = details.find(
    (doctor) => doctor.license_number === parseInt(license_number)
  );

  const { name, image, speciality, experience, fee, availability } =
    singleDoctor;

  const handleBookmark = () => {
    addBookmark(singleDoctor);
  };

  return (
    <div className="mulish">
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className=" text-[40px] font-extrabold text-center">
          Lawyer’s Profile Details
        </h1>
        <h1 className="text-base font-normal text-center mt-5 px-10 md:px-32 mb-8">
          Meet our team of experienced and dedicated lawyers, each bringing
          unique expertise to serve your legal needs. From corporate law to
          personal matters, our professionals are committed to delivering
          trusted and effective legal solutions. Explore their profiles to find
          the right advocate for your case.
        </h1>
      </motion.div>
      {/* Card Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row"
      >
        <figure>
          <img
            className="md:h-[350px] max-h-md max-w-md md:w-[350px] block rounded-2xl"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex flex-col gap-10">
          <div className=" text-[#09982F] mt-5 ">
            <p>{experience}</p>
          </div>
          <h2 className="card-title  font-extrabold text-2xl">{name}</h2>
          <div className="flex ">
            <p className=" font-medium text-[18px]">{speciality}</p>
            <p className=" font-medium text-base">
              Licence No. {license_number}
            </p>
          </div>
          <div className=" font-bold text-base ">
            <span className="">Availability:</span>
            <div className="flex gap-12">
              {availability.map((avail, index) => (
                <p
                  key={index}
                  className="text-[#FFA000] text-[14px] font-normal border border-orange-300 rounded-3xl bg-orange-100 text-center "
                >
                  {avail}
                </p>
              ))}
            </div>
          </div>
          <p className=" font-bold text-base">
            Consultation Fee: <span className="text-green-600">{fee}</span>
          </p>
          <Link to={``} className="card-actions justify-end "></Link>
        </div>
      </motion.div>
      {/* Appointment Button */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-5"
      >
        <h1 className=" text-2xl font-bold text-center mt-16">
          Book an Appointment
        </h1>
        <div className="flex justify-between mt-8">
          <h1 className=" text-[18px] font-bold text-center">Availability</h1>
          <h1 className="text-[#09982F] text-[14px] font-medium">
            Lawyer Available Today
          </h1>
        </div>
        <div className="flex mb-10 mt-10 items-center gap-1 justify-center">
          <CiCircleAlert className="text-[#FFA000]"></CiCircleAlert>
          <h1 className="text-[#FFA000] text-[16px] font-medium  ">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </h1>
        </div>
        <Link to={"/bookmark"}>
          <button
            onClick={() => handleBookmark()}
            className="w-full cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group mb-28"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-400 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease bg-green-700">
              Book an Appointment
            </span>
            <span className="relative invisible">Book an Appointment</span>
          </button>
        </Link>
      </motion.div>
      <Footer></Footer>
    </div>
  );
};

export default DoctorDetails;
