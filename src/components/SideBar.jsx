import React from 'react'
import { useSelector } from 'react-redux'


const SideBar = () => {
  const isMenuOpen =useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='w-48 p-5 shadow-lg'>
         <ul className='mb-2'>
        <li>Home</li>
        <li>shorts</li>
        <li>News</li>
    </ul>
        <h1 className='font-bold'>Subscriptions</h1>
    <ul className='mb-2'>
        <li>Home</li>
        <li>shorts</li>
        <li>News</li>
    </ul>
     <h1 className='font-bold'>Subscriptions</h1>
     <ul className='mb-2'>
        <li>Home</li>
        <li>shorts</li>
        <li>News</li>
    </ul>

    </div>
  )
}

export default SideBar
