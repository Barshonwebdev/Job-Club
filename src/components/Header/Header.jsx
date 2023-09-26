import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
//text-lg md:text-sm text-lime-600 mr-5
const Header = () => {
    
    return (
      <div className="flex justify-between ">
        <div className="">
          <h3 className="text-2xl md:text-3xl text-emerald-600 italic font-extrabold ">
            <span className="text-indigo-700">Job</span>Club
          </h3>
        </div>
        <div className="order-first md:order-1 flex flex-col md:flex-row gap-1 md:gap-6">
          <div>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-lg md:text-md  rounded text-sky-600  p-1  underline"
                  : "text-lg md:text-md  rounded text-sky-600  p-1 "
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 inline md:hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Home
            </NavLink>
            </div>
            <div>
            <NavLink
              to="/stat"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-lg md:text-md  rounded text-sky-600  p-1  underline"
                  : "text-lg md:text-md  rounded text-sky-600  p-1 "
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 inline md:hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Statistics
            </NavLink>
            </div>
            <div>
            <NavLink
              to="/applied"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-lg md:text-md  rounded text-sky-600  p-1  underline"
                  : "text-lg md:text-md  rounded text-sky-600  p-1 "
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 inline md:hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Applied Jobs
            </NavLink>
          </div>
        </div>
        <div className="order-2 mt-1">
          <button  className="animate-pulse bg-lime-600 p-1 md:p-2 rounded-lg text-white text-xs hover:bg-lime-800">
            Start Applying
          </button>
        </div>
        <Toaster></Toaster>
      </div>
    );
};

export default Header;