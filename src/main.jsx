import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from './components/Statistics/Statistics.jsx';
import Errorpage from './components/404/Errorpage.jsx';
import Home from './components/Home/Home.jsx';
import Applied from './components/Applied/Applied.jsx';
import Main from './components/Layout/Main.jsx';
import Details from './components/Details/Details.jsx';


const router= createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/:detailId',
        element: <Details ></Details>,
        loader: ()=> fetch ('jobs.json'),
      },
      {
        path:'/stat',
        element: <Statistics></Statistics>
      },
      {
        path:'/applied',
        element: <Applied></Applied>
      }
    ]
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
