import React from "react";
import Navber from "../Components/Navber";

const ErrorPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navber></Navber>
      <div>
        <img
          className="mx-auto max-h-md md:h-96 shadow rounded-2xl"
          src="https://i.ibb.co.com/dxwwSCv/255-2550104-404-error-page-png-transparent-png.png"
          alt=""
        />
        <h1 className=" text-6xl text-center">404 - Page Not Found</h1>
        <h1 className=" text-2xl text-center mt-5">
          Oopps! The page you are looking for doesn't exist
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
