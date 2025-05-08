import React from "react";
import { Link } from "react-router";
import Footer from "./Footer";
import { fadeInUp } from "./MotionVarients";
import { motion } from "framer-motion";

const EmptyBookmark = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col justify-center gap-10 text-center mt-26 mb-26 px-3"
    >
      <h1 className=" font-bold text-3xl md:text-5xl">
        You have not booked any appointments yet
      </h1>
      <h1 className=" font-normal text-xl">
        Out platform connects with verified experienced Lawyer across various
        speciaties - all at your convenience
      </h1>
      <Link to={"/"}>
        <button className="w-[250px] mx-auto cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full  h-full text-white duration-300 -translate-x-full bg-green-400 group-hover:translate-x-0 ease">
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
            Book An Appointment
          </span>
          <span className="relative invisible">Book An Appointment</span>
        </button>
      </Link>
      <Footer></Footer>
    </motion.div>
  );
};

export default EmptyBookmark;
