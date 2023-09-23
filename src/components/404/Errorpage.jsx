import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    return (
      <div className="text-center">
        <h3 className="md:text-5xl xs:text-2xl mt-14">Error <span className='text-red-700'>404! </span> Page Not Found</h3>
        <h5 className='mt-14 mx-5 md:text-xl xs:text-md'>The page you are looking for might not exist! Please recheck your intended link.</h5>
        <div className='mt-14'>
          <button className='bg-black text-white p-2 rounded-lg hover:text-sky-600'>
            <Link to="/">Back to homepage</Link>
          </button>
        </div>
      </div>
    );
};

export default Errorpage;