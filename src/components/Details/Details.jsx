import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { addToDb, getStoredJobs } from '../../utilities/fakedb';
import  { toast,Toaster } from 'react-hot-toast';

const Details = () => {
    const data= useLoaderData();
    console.log(data)
    let {detailId}= useParams();
    console.log(detailId);
    const idNumber=parseInt(detailId);
    const post=data.find((ob)=>ob.id===idNumber);
    const {description,experience,responsibility,requirement,phone, salary,title,email,address,Company}=post;
    console.log(post);

    const handleApply=()=>{
      console.log(idNumber);
      addToDb(idNumber);
      let jobStorage=getStoredJobs();
      const quantity= jobStorage[idNumber]
      if(quantity>1){
        toast('You have already applied to this job once', {
          style:{
            backgroundColor: "blue",
            color:"white",
            marginTop:"50px"
          }
        })
      }
      else if (quantity==1){
         toast("Applying Successful!", {
           style: {
             backgroundColor: "blue",
             color: "white",
             marginTop: "50px",
           },
         });
      }
    }
    return (
      <div className="mb-24">
        <h3 className="text-center mt-20 font-mono text-2xl">Job Details</h3>
        <div className="flex flex-col md:flex-row ">
          <div className="md:mt-24 mt-10 md:w-3/4 me-5 ">
            <p className="text-sm ">
              <span className="font-bold">Job Description: </span>
              <span className="text-gray-600">{description}</span>
            </p>
            <br />
            <p className="text-sm ">
              <span className="font-bold">Job Responsibility: </span>
              <span className="text-gray-600">{responsibility}</span>
            </p>
            <br />
            <p className="text-sm ">
              <span className="font-bold">Educational Requirement: </span>
              <br />
              <p className="mt-2 text-gray-600">{requirement}</p>
            </p>
            <br />
            <p className="text-sm ">
              <span className="font-bold">Experiences: </span>
              <br />
              <p className="mt-2 text-gray-600">{experience}</p>
            </p>
          </div>

          <div className="md:mt-24 mt-10  grow rounded">
            <div className="border  bg-lime-50 border-gray-200 rounded p-3">
              <p className="font-bold text-sm mb-2">Job Details</p>
              <hr />
              <div className="mt-2 flex items-center">
                <CurrencyDollarIcon className="h-4 w-4 text-lime-700"></CurrencyDollarIcon>
                <p className="text-sm font-semibold ms-1">
                  Salary: <span className="text-gray-600">{salary}</span>{" "}
                  <span className="text-gray-600">(per month)</span>
                </p>
              </div>
              <div className="mt-2 flex items-center">
                <BuildingOfficeIcon className="h-4 w-4 text-lime-700"></BuildingOfficeIcon>
                <p className="text-sm font-semibold ms-1">
                  Company: <span className="text-gray-600">{Company}</span>
                </p>
              </div>
              <div className="mt-2 flex">
                <BriefcaseIcon className="h-4 w-4 text-lime-700"></BriefcaseIcon>
                <p className="text-sm font-semibold ms-1">
                  Job Title: <span className="text-gray-600">{title}</span>
                </p>
              </div>
              <p className="font-bold text-sm mb-2 mt-5">Contact Information</p>
              <hr />
              <div className="mt-2 flex items-center">
                <PhoneIcon className="h-4 w-4 text-lime-700"></PhoneIcon>
                <p className="text-sm font-semibold ms-1">
                  Phone: <span className="text-gray-600">{phone}</span>
                </p>
              </div>
              <div className="mt-2 flex items-center">
                <EnvelopeIcon className="h-4 w-4 text-lime-700"></EnvelopeIcon>
                <p className="text-sm font-semibold ms-1">
                  Email: <span className="text-gray-600">{email}</span>
                </p>
              </div>
              <div className="mt-2 flex ">
                <MapPinIcon className="h-4 w-4 text-lime-700"></MapPinIcon>
                <p className="text-sm font-semibold ms-1">
                  Address: <span className="text-gray-600">{address}</span>
                </p>
              </div>
            </div>
            <div className='animate-pulse'>
              <button onClick={handleApply} className=" hover:bg-lime-900 mt-5 w-full text-center border border-lime-700 rounded bg-lime-700 text-white p-2">
                Apply Now
              </button>
              <Toaster></Toaster>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;