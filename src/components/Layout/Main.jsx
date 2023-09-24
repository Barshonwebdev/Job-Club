import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
      <div className='overflow-y-scroll'>
        <div className="mx-3 md:mx-36 mt-5 ">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Main;