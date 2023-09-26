import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { getStoredJobs } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const Applied = () => {
    const appliedJobs= useLoaderData();
    const [jobs,setJobs]=useState(appliedJobs);
    console.log(jobs);
    return (
      <div className="mb-10">
        <h3 className="text-center mt-20 font-mono text-2xl">Applied Jobs</h3>
        <div className='mt-10 flex justify-center md:justify-end text-sm items-center'>
          <h2>Sort by: </h2>
          <button className='ms-2 bg-sky-600 hover:bg-sky-800 text-white p-1 rounded-lg'>Onsite</button>
          <button className='ms-2 bg-sky-600 hover:bg-sky-800 text-white p-1 rounded-lg'>Remote</button>
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