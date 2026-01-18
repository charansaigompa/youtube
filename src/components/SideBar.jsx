import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHandleSearchVideoAPI } from '../hooks/useHandleSearchVideoApi'

const SideBar = () => {
  const handleSearch=useHandleSearchVideoAPI( )
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
     <div className="w-48 h-screen bg-[#181818] text-white p-4">
     
      <ul className="border-b border-gray-700 pb-3 mb-3">
        <li className="mb-2 hover:bg-[#303030] rounded-lg px-3 py-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-2 hover:bg-[#303030] rounded-lg px-3 py-2" onClick={()=>{handleSearch("shorts")}}>
          Shorts
        </li>
      </ul>

      <h1 className="text-sm font-semibold text-gray-400 mb-2">
        Explore
      </h1>
      <ul className="border-b border-gray-700 pb-3 mb-3">
        <li className="mb-2 hover:bg-[#303030] rounded-lg px-3 py-2" onClick={()=>{handleSearch("Trending")}}>
          Trending
        </li>
        <li className="mb-2 hover:bg-[#303030] rounded-lg px-3 py-2" onClick={()=>{handleSearch("news")}}>
          News
        </li>
        <li className="mb-2 hover:bg-[#303030] rounded-lg px-3 py-2"onClick={()=>{handleSearch("gaming")}}>
          Gaming
        </li>
      </ul>

      
      <h1 className="text-sm font-semibold text-gray-400 mb-2">
        Subscriptions
      </h1>
      <ul>
        <li className="mb-2 hover:bg-[#303030] rounded-lg px-3 py-2">
          Channel 1
        </li>
        <li className="mb-2 hover:bg-[#303030] rounded-lg px-3 py-2">
          Channel 2
        </li>
      </ul>

    </div>
  );
};

export default SideBar;
