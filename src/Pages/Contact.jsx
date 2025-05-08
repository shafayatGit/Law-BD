import React, { useState } from "react";
import Navber from "../Components/Navber";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

import { fadeInUp } from "../Components/MotionVarients";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with an API call

    toast(
      <div className="flex items-center gap-2">
        <IoIosCheckmarkCircle
          size={25}
          className="text-green-700"
        ></IoIosCheckmarkCircle>
        <p className="text-black mulish font-base text-[18px]">
          Thank you for reaching out
        </p>
      </div>
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mulish max-w-6xl mx-auto px-5"
    >
      <h2
        className="text-4xl font-semibold  mt-10"
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        Contact Us
      </h2>
      <p
        className="text-sm font-base "
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Have questions or need help? Whether you're a job seeker or an employer,
        we're here for you.
      </p>
      <form
        // className="mb-18"
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label className="text-xl font-medium ">Name</label>
          <br />
          <input
            className="border border-gray-300 rounded-lg"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label className="text-xl font-medium ">Email</label>
          <br />
          <input
            className="border border-gray-300 rounded-lg"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label className="text-xl font-medium ">Message</label>
          <br />
          <textarea
            className="border border-gray-300 rounded-lg"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group"
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
            Send
          </span>
          <span className="relative invisible">Send</span>
        </button>
      </form>

      <div className="mt-18"></div>

      <ToastContainer></ToastContainer>
    </motion.div>
  );
}

export default ContactUs;
