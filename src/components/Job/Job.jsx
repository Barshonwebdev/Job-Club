import React from 'react';
import { MapPinIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
const Job = ({job}) => {
    const {title,logo,Company,type,jobLocation, location,salary}=job;
    return (
      <div className="border items-center border-solid border-gray-200 rounded p-5">
        <div className="w-2/4 h-fit mb-5">
          <img className="" src={logo} alt="" />
        </div>
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
        <div className=" mt-3">
          <button className="px-3 py-1 hover:bg-lime-800 rounded text-white bg-lime-600">View Details</button>
        </div>
      </div>
    );
};

export default Job;