import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { getStoredJobs } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const Applied = () => {
    const appliedJobs= useLoaderData();
    const [jobs,setJobs]=useState(appliedJobs);
    console.log(appliedJobs);
    const handleRemote=()=>{
      const remotejobArray = jobs.filter((job) => job.jobLocation == "Remote");
      setJobs(remotejobArray);
    }
    const handleOnsite=()=>{
      const onsitejobArray = jobs.filter((job) => job.jobLocation == "Onsite");
      setJobs(onsitejobArray);
    }

    const handleUnsorted=()=>{
      setJobs(appliedJobs);
    }
    
    return (
      <div className="mb-10">
        <h3 className="text-center mt-20 font-mono text-2xl">Applied Jobs</h3>
        <div className='mt-10 flex justify-center md:justify-end text-sm items-center'>
          <h2>Sort by: </h2>
          <button onClick={handleOnsite} className='ms-2 bg-sky-600 hover:bg-sky-800 text-white p-1 rounded-lg'>Onsite</button>
          <button onClick={handleRemote}  className='ms-2 bg-sky-600 hover:bg-sky-800 text-white p-1 rounded-lg'>Remote</button>
          <button onClick={handleUnsorted}  className='ms-2 bg-sky-600 hover:bg-sky-800 text-white p-1 rounded-lg'>Unsorted</button>
        </div>
        <div className='mt-5 '>
          {jobs.map((job) => (
            <AppliedJob key={job.id} job={job}></AppliedJob> 
          ))}
        </div>
      </div>
    );
};

export default Applied;