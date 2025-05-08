import React from "react";
import CounterPage from "./CounterPage";

const LawServices = () => {
  return (
    <div className="mt-24 mulish">
      <h1 className=" text-[40px] font-extrabold text-center">
        We Provide Best Law Services
      </h1>
      <h1 className=" text-base font-normal text-center mt-5 px-10 md:px-32 mb-8">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.{" "}
      </h1>
      <div>
        <CounterPage></CounterPage>
      </div>
    </div>
  );
};

export default LawServices;
