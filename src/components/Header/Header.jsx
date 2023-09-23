import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-xl md:text-3xl text-emerald-600 italic font-bold ">
            Job Club
          </h3>
        </div>
        <div className="order-first md:order-1 flex flex-col md:flex-row">
          <div>
            <Link to="/" className="text-sm text-lime-600 mr-5">
              Home
            </Link>
          </div>
          <div>
            <Link to="/stat" className="mr-5 text-sm text-lime-600">
              Statistics
            </Link>
          </div>
          <div>
            <Link to="/applied" className="text-sm text-lime-600">
              Applied Jobs
            </Link>
          </div>
        </div>
        <div className="order-2">
          <button className="bg-lime-600 p-2 rounded-lg text-white hover:bg-lime-800">
            Start Applying
          </button>
        </div>
      </div>
    );
};

export default Header;