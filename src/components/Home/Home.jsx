import React from 'react';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
      <div>
        <div className="flex items-center text-center md:text-start mt-10 flex-col md:flex-row">
          <div className="">
            <h2 className="md:text-5xl font-semibold md:pe-36 mb-4">
              One Step <br /> Closer To Your{" "}
              <span className="text-lime-600">Dream Job</span>
            </h2>
            <p className="md:pe-60 text-xs text-gray-500 md:mt-4">
              Explore numerous available jobs to find your expected jobs.
              Providing competent people jobs all over the globe is our first
              priority. Hop in and enter the corporate world with ease!
            </p>
            <button id='btn' className="mb-4 mt-5 bg-lime-600 p-2 rounded text-white hover:bg-lime-700">
              Get Started
            </button>
          </div>
          <div className="w-full">
            <img className="" src="../../../assets/images/user.png" alt="" />
          </div>
        </div>

        <Categories ></Categories>
      </div>
    );
};

export default Home;