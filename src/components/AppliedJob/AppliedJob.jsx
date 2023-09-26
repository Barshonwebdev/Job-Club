import React from 'react';
import { MapPinIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const AppliedJob = ({job}) => {
    const {id,logo,Company,title,salary,type,jobLocation,location}=job;
    return (
      <div className="border items-center border-solid border-gray-300 rounded py-4 px-2 md:py-5 md:px-10 mb-8 flex ">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 grow">
            <div className="w-fit h-8 mb-5 ">
              <img className="w-32" src={logo} alt="" />
            </div>
            <div className="shrink">
              <p className="text-md font-semibold">{title}</p>
              <p className="text-gray-400">{Company}</p>
              <div className=" mt-2 flex gap-4">
                <p className="border rounded text-sm text-lime-600 border-lime-600 p-1">
                  {jobLocation}
                </p>
                <p className="border rounded text-sm text-lime-600 border-lime-600 p-1">
                  {type}
                </p>
              </div>
              <div className="mt-3 text-gray-500 flex items-center gap-3 text-sm">
                <div className="flex items-center">
                  <MapPinIcon className="h-4 w-4 text-gray-500"></MapPinIcon>
                  {location}
                </div>
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-4 w-4 text-gray-500"></CurrencyDollarIcon>
                  salary: {salary}
                </div>
              </div>
            </div>
        </div>
        <div className=" mt-3 flex justify-end ">
          <Link to={`/${id}`}>
            <button className="px-3 py-1 text-sm md:text-md hover:bg-lime-800 rounded text-white bg-lime-600">
              Details
            </button>
          </Link>
        </div>
      </div>
    );
};

export default AppliedJob;