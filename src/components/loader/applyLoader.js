
const applyLoader= async ()=>{
    const loadedJobs=await fetch('jobs.json');
    const jobs= await loadedJobs.json();
    console.log(jobs);
    return jobs;
}

export default applyLoader;