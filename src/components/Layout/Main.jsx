import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
      <div className="flex flex-col h-screen">
        <div className="mx-3 md:mx-36 mt-5 mb-auto ">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;