import React from "react";
import Home from "../Pages/Home";
import { Outlet } from "react-router";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Layout;
