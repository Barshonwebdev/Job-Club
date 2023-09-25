import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const data= useLoaderData();
    console.log(data)
    let {detailId}= useParams();
    console.log(detailId);
    const idNumber=parseInt(detailId);
    const post=data.find((ob)=>ob.id===idNumber);
    const {description,experience,responsibility,requirement,phone, salary,title,email,address,company}=post;
    console.log(post);
    return (
      <div className='mb-24'>
        <h3 className="text-center mt-20 font-mono text-2xl">Job Details</h3>
        <div className='flex flex-col md:flex-row '>
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

          <div className='mt-24 border grow bg-lime-50 border-gray-200 p-3 rounded'>
            <p className='font-bold text-sm mb-2'>Job Details</p>
            <hr />
          </div>
        </div>
      </div>
    );
};

export default Details;