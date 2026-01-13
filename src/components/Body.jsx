import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';
import Header from './Header';




const Body = () => {
  return (
    <div className='bg-[#0F0F0F]'><Header/>
    <div className='grid  grid-flow-col bg-[#0F0F0F] '>
      
      <SideBar/>
      
      <Outlet/>
      
    </div>
    </div>
  )
}

export default Body
