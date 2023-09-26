import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { getStoredJobs } from '../../utilities/fakedb';

const Applied = () => {
    const [appliedJobs,setAppliedJobs]=useState([]);
    const [storedJobs, setStoredJobs]= useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setAppliedJobs(data))
    },[])

    const stored=getStoredJobs();
    console.log(stored);
    for (const id in stored){
      const result=appliedJobs.find(job=>(job.id===parseInt(id)))
      console.log(result)
    }
    
    return (
      <div className="mb-16">
        <h3 className="text-center mt-20 font-mono text-2xl">Applied Jobs</h3>
        
      </div>
    );
};

export default Applied;