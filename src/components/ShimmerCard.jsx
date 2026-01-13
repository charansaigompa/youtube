import React from "react";

const ShimmerCard = () => {
  return (
    <div className="p-2 m-4 w-72 shadow-lg rounded-xl bg-[#212121]">
      <div className=" w-full h-40  bg-[#303030] rounded-xl  animate-pulse"></div>

      <div className="w-[90%] mt-4 h-4 bg-[#303030] rounded-xl "></div>
      <div className="w-[70%]  mt-2 h-4 bg-[#303030] rounded-xl"></div>
      <div className="mt-3 h-3 w-[50%] bg-[#303030] rounded-md animate-pulse"></div>
    </div>
  );
};

export default ShimmerCard;
