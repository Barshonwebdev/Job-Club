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
      <div className="mb-16">
        <h3 className="text-center mt-20 font-mono text-2xl">Applied Jobs</h3>
        <div className='mt-20 '>
          {jobs.map((job) => (
            <AppliedJob key={job.id} job={job}></AppliedJob> 
          ))}
        </div>
      </div>
    );
};

export default Applied;