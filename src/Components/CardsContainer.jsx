import React, { useEffect, useState } from "react";
import Card from "./Card";
import { fadeInLeft, fadeInRight } from "./MotionVarients";
import { motion } from "framer-motion";

const CardsContainer = ({ doctorsData }) => {
  const [displayCard, setDisplayCard] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      return setDisplayCard(doctorsData);
    }
    return setDisplayCard(doctorsData.slice(0, 6));
  }, [doctorsData, showAll]);
  return (
    <div className="mt-24 mulish flex flex-col">
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className=" text-[40px] font-extrabold text-center">
          Our Best Lawyers
        </h1>
        <p className=" text-base font-normal text-center mt-5 px-10 md:px-32 mb-8">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </motion.div>
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-2xl px-5"
      >
        {displayCard.map((data) => (
          <Card key={data.license_number} data={data}></Card>
        ))}
      </motion.div>
      {/* Show All And Show Less Button */}
      <button
        onClick={() => {
          setShowAll((prv) => !prv);
          if (showAll) {
            window.scrollTo(0, 500);
          }
        }}
        className="mt-8 cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group mx-auto w-[230px]"
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
          {showAll ? "Show Less" : "Show All"}
        </span>
        <span className="relative invisible">Show All</span>
      </button>
    </div>
  );
};

export default CardsContainer;
