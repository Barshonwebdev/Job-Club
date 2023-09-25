import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import { data } from 'autoprefixer';

const Jobs = () => {
    const [jobs,setJobs]=useState([]);
    
    useEffect(()=>{
        fetch ('/public/jobs.json')
        .then (res=>res.json())
        .then (data=> setJobs(data.slice(0,4)))
    },[])
    console.log(jobs);
    
    const [allJobs,setAllJobs]=useState([]);
    useEffect(()=>{
          fetch("/public/jobs.json")
            .then((res) => res.json())
            .then((data) => setAllJobs(data))
    },[])
    
    const [showButton,setShowButton]=useState(true);
    const toggleButton=()=>{
      setJobs(allJobs);
      setShowButton(!showButton);
    }
    return (
      <div>
        <div className="md:mt-32 mt-10 grid md:grid-cols-2 gap-10 md:mx-32 ">
          {jobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>

        <div className="text-center mt-5">
          {showButton && (
            <button
              onClick={toggleButton}
              className="px-3 py-1 hover:bg-lime-800 rounded text-white bg-lime-600"
            >
              See All Jobs
            </button>
          )}
        </div>
      </div>
    );
};

export default Jobs;