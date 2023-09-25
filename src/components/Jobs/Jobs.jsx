import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs,setJobs]=useState([]);
    
    useEffect(()=>{
        fetch ('/public/jobs.json')
        .then (res=>res.json())
        .then (data=> setJobs(data.slice(0,4)))
    },[])
    console.log(jobs);
    return (
        <div className='mt-48 grid grid-cols-2 gap-10 mx-32'>
            {
                jobs.map(job=><Job key={job.id} job={job} ></Job>)
            }
        </div>
    );
};

export default Jobs;