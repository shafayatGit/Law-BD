import React from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

const Navber = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm py-8 mulish">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
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
        </div>
        <NavLink to={"/"} className="items-center text-xl hidden md:flex">
          <img className="h-[42px]" src="logo.png" alt="" />
          <h1 className=" text-[32px] font-extrabold">Law.BD</h1>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  text-[18px] font-medium">
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
      </div>
      <div className="navbar-end">
        <Link to={"/contact"}>
          <button className="mr-3 cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group">
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
              Contact Now
            </span>
            <span className="relative invisible">Contact Now</span>
          </button>
        </Link>
        <ThemeToggle> </ThemeToggle>
      </div>
    </div>
  );
};

export default Navber;
