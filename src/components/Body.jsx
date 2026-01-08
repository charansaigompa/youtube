import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';
import Header from './Header';




const Body = () => {
  return (
    <div><Header/>
    <div className='grid  grid-flow-col '>
      
      <SideBar/>
      
      <Outlet/>
      
    </div>
    </div>
  )
}

export default Body
