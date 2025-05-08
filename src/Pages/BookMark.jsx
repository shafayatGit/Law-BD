import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "../Components/Card";
import { getBookmark, removeBookmark } from "../Utility";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { MdOutlineError } from "react-icons/md";
import EmptyBookmark from "../Components/EmptyBookmark";
import Footer from "../Components/Footer";
import { fadeInRight } from "../Components/MotionVarients";

const BookMark = () => {
  const [displayCard, setDisplayCard] = useState([]);
  // const { name } = displayCard;

  const fees = displayCard.map((data) => {
    const fee_data = {
      name: data.name,
      fee: data.fee,
    };
    return fee_data;
  });

  // console.log(fees);
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const colors = ["orange", "blue", "red", "pink", "green"];
  const color = colors.map((color) => {
    return color;
  });

  useEffect(() => {
    const savedCard = getBookmark();
    setDisplayCard(savedCard);
  }, []);

  const handleRemove = (licence_number) => {
    removeBookmark(licence_number);
    setDisplayCard(getBookmark());
    toast(
      <div className="flex items-center gap-2">
        <MdOutlineError className="text-red"></MdOutlineError>
        <h1>Appointment Cancelled </h1>
      </div>
    );
  };

  if (displayCard.length < 1) return <EmptyBookmark></EmptyBookmark>;
  return (
    <div id="" className="mulish ">
      {/* Recahart Section */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10"
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={fees}>
            <XAxis dataKey="name"></XAxis>
            <YAxis dataKey="fee"></YAxis>
            <Bar dataKey="fee" fill={color} shape={<TriangleBar />}>
              {fees.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <h1 className=" font-extrabold text-[40px] mb-5 text-center mt-16">
        My Today Appointments
      </h1>
      <h1 className=" font-normal text-[16px] mb-16 text-center">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.
      </h1>

      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col gap-6">
          {displayCard.map((data) => (
            <div key={data.license_number} className="p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h1 className=" font-bold text-[20px] mb-5">{data.name}</h1>
                  <h1 className=" font-medium text-[18px]">
                    {data.speciality}
                  </h1>
                </div>
                <h1 className=" font-medium text-[20px]">
                  Appointment Fee: {data.fee}
                </h1>
              </div>
              <Link>
                <button
                  onClick={() => handleRemove(data.license_number)}
                  className="w-full cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-red-600 transition duration-300 ease-out  rounded-full shadow-md group mb-28"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
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
                  <span className="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease bg-red-200 ">
                    Cancel Appointment
                  </span>
                  <span className="relative invisible">Cancel Appointment</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
};

export default BookMark;
