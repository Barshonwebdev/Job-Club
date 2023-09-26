import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Applied = () => {
    const [appliedJobs,setAppliedJobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
      <div className="mb-16">
        <h3 className="text-center mt-20 font-mono text-2xl">Applied Jobs</h3>
      </div>
    );
};

export default Applied;