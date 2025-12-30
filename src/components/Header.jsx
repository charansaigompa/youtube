import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
        <div className='flex col-span-1'>
      <img className='h-12' src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="menu" />
      <img  className='h-12 mx-2' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg" alt="youtube-logo" />
      </div>
       <div className='col-span-10  flex justify-center'>
        <input type="text" className=' w-1/2 border border-gray-400 p-2 rounded-l-full' />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100 '><img src="https://static.vecteezy.com/system/resources/previews/015/397/473/original/magnifying-glass-icon-glass-search-magnifier-loupe-find-zoom-symbol-sign-free-vector.jpg" alt="img" className='h-8 w-6' /></button>
       </div>
       <div className='col-span-1'>
        <img  className='h-12' src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="profile" />
       </div>
    </div>
  )
}

export default Header
