// import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeInLeft } from "./MotionVarients";
import { motion } from "framer-motion";

const CounterPage = () => {
  const { ref, inView } = useInView();
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-24"
    >
      <div
        className="flex flex-col md:flex-row justify-between items-center"
        ref={ref}
      >
        <div>
          <img
            className="h-[64px] w-[64px]"
            src="https://i.ibb.co.com/xtTY3QrX/success-doctor.png"
            alt=""
          />
          <div className="mulish  text-6xl font-bold ">
            {inView && (
              <CountUp start={0} end={199} duration={2} delay={0}></CountUp>
            )}{" "}
            +
          </div>
          <h1 className=" text-[20px] font-medium">Total Lawyer</h1>
        </div>
        <div>
          <img
            className="h-[64px] w-[64px]"
            src="
https://i.ibb.co.com/x4mwQTw/success-review.png
"
            alt=""
          />
          <div className="mulish  text-6xl font-bold ">
            {inView && (
              <CountUp start={0} end={467} duration={2} delay={0}></CountUp>
            )}{" "}
            +
          </div>
          <h1 className=" text-[20px] font-medium">Total Reviews</h1>
        </div>
        <div>
          <img
            className="h-[64px] w-[64px]"
            src="https://i.ibb.co.com/dHc7NbC/success-patients.png"
            alt=""
          />
          <div className="mulish  text-6xl font-bold ">
            {inView && (
              <CountUp start={0} end={1900} duration={2} delay={0}></CountUp>
            )}{" "}
            +
          </div>
          <h1 className=" text-[20px] font-medium">Cases Initiated</h1>
        </div>
        <div>
          <img
            className="h-[64px] w-[64px]"
            src="https://i.ibb.co.com/n8KkpXDj/success-staffs.png"
            alt=""
          />
          <div className="mulish  text-6xl font-bold ">
            {inView && (
              <CountUp start={0} end={300} duration={2} delay={0}></CountUp>
            )}{" "}
            +
          </div>
          <h1 className=" text-[20px] font-medium">Total Stuffs</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default CounterPage;
