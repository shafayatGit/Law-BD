import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className=" mulish footer footer-horizontal footer-center text-base-content rounded p-10 bg-[#0F0F0F] text-white">
      <NavLink to={"/"} className="items-center text-xl flex">
        <img className="h-[42px] " src="logo-footer.png" alt="" />
        <h1 className="text-white text-[32px] font-extrabold">Law.BD</h1>
      </NavLink>
      <nav className="grid grid-flow-col gap-4">
        <ul className="menu menu-horizontal px-1  text-[18px] font-medium mulish">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-700 font-bold" : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-700 font-bold" : ""
              }
              to={"/bookmark"}
            >
              Bookmark
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-700 font-bold" : ""
              }
              to={"/blogs"}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-700 font-bold" : ""
              }
              to={"/contact"}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-8">
          <a
            target="blank_"
            href="https://www.facebook.com/share/1CNcgU7HML/?mibextid=wwXIfr"
          >
            <FaFacebook size={35}></FaFacebook>
          </a>
          <a target="blank_" href="https://github.com/shafayatGit">
            <FaGithub size={35}></FaGithub>
          </a>
          <a
            target="blank_"
            href="https://www.linkedin.com/in/shafayat-hossain-patowary/"
          >
            <FaLinkedin size={35}></FaLinkedin>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
