import React from "react";
import { Link } from "react-router";
// import { ToastContainer } from "react-toastify/unstyled";

const Card = ({ data }) => {
  // console.log(data);
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img
          className="h-[160px] w-[160px] rounded-2xl"
          src={data.image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <div className="flex text-[#09982F] ">
          <p>Available</p>
          <p>{data.experience}</p>
        </div>
        <h2 className="card-title  font-extrabold text-2xl">{data.name}</h2>
        <p className=" font-medium text-[18px]">{data.speciality}</p>
        <p className=" font-medium text-base">
          Licence No. {data.license_number}
        </p>
        <Link
          to={`/doctor-details/${data.license_number}`}
          className="card-actions justify-end "
        >
          <button className=" cursor-pointer w-full px-5 py-2.5 relative group overflow-hidden font-medium bg-purple-50 text-black inline-block rounded-xl border border-green-600">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">
              View Details
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
