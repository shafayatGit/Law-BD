import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const ErrorDoctors = () => {
  const details = useLoaderData();
  // console.log(details);
  const { license_number } = useParams();
  // console.log(license_number);
  return (
    <div className="mulish text-center flex flex-col gap-9 mb-32 mt-28">
      <h1 className=" text-5xl font-bold">No Lawyer Found</h1>
      <div>
        <h1 className=" text-[18px] font-normal">
          No Lawyer Found with this license no:
        </h1>
        <div className=" text-xl font-medium"> {license_number} </div>
      </div>
      <Link to={"/"}>
        <button className="w-[200px] mx-auto cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group">
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
            View All Lawyers
          </span>
          <span className="relative invisible">View All Lawyers</span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorDoctors;
