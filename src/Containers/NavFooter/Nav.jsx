import FancyText from "@carefully-coded/react-text-gradient";
import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
} from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
function Nav() {

  return (
    <div className="my-3">
      <div className="navbar">
        <div className=" flex justify-between  w-full   lg:justify-start md:w-1/2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn p-0 btn-ghost lg:hidden"
            >
              <IoMenu size={30} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/listedbook">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="/pageread">Pages to Read</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <FancyText
            className="font-bold  text-3xl uppercase"
            gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
            animate
            animateDuration={1000}
          >
            Book Vibe
          </FancyText>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal font-semibold items-center gap-x-10 text-xl px-1">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2  px-3 py-1 border-2 duration-300 hover:bg-[#23BE0A] hover:text-white border-[#23BE0A] rounded-lg"
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2  px-3 py-1 border-2 duration-300 hover:bg-[#23BE0A] hover:text-white border-[#23BE0A] rounded-lg"
                  : ""
              }
              to="/listedbook"
            >
              Listed Books
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2  px-3 py-1 border-2 duration-300 hover:bg-[#23BE0A] hover:text-white border-[#23BE0A] rounded-lg"
                  : ""
              }
              to="/pageread"
            >
              Pages to Read
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2  px-3 py-1 border-2 duration-300 hover:bg-[#23BE0A] hover:text-white border-[#23BE0A] rounded-lg"
                  : ""
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2  px-3 py-1 border-2 duration-300 hover:bg-[#23BE0A] hover:text-white border-[#23BE0A] rounded-lg"
                  : ""
              }
              to="/about"
            >
              About
            </NavLink>
          </ul>
        </div>
        <div className="hidden md:flex navbar-end gap-x-4">
          <NavLink
            to="/signin"
            className={`b px-3 rounded-lg py-2  text-white  bg-[#23BE0A]`}
          >
            Sign in
          </NavLink>
          <NavLink
            to="/signup"
            className={`px-3 rounded-lg py-2 bg-[#060707] text-white `}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
