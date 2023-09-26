import { getStoredJobs } from "../../utilities/fakedb";

const applyLoader= async ()=>{
    const loadedJobs=await fetch('jobs.json');
    const jobs= await loadedJobs.json();
    console.log(jobs);
    const storedJobs=getStoredJobs();
    const appliedJobs=[];
    
    for (const id in storedJobs){
        const addedJobs=jobs.find(job=>job.id==id);
        appliedJobs.push(addedJobs);
    }
    console.log(appliedJobs);
    return appliedJobs;

}

export default applyLoader;