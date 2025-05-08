// import React, { useState } from "react";
import Hero from "../Components/Hero";
import CardsContainer from "../Components/CardsContainer";
import { useLoaderData } from "react-router";
import LawServices from "../Components/LawServices";
import Footer from "../Components/Footer";
// import { toast } from "react-toastify";

const Home = () => {
  const doctorsData = useLoaderData();
  // console.log(doctorsData);
  // toast("hello");
  return (
    <div>
      <Hero></Hero>
      <CardsContainer doctorsData={doctorsData}></CardsContainer>
      <LawServices></LawServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;
