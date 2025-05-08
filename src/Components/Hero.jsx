import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeInUp } from "./MotionVarients";

const Hero = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="hero h-[550px] bg mulish"
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h1>
          <p className="mb-5 max-w-3xl">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust..
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
