import React from 'react'
import ShimmerCard from './ShimmerCard'

const ShimmerUI = () => {
  return (
    
    <div className=' flex flex-wrap justify-center '>
   
      {Array(14).fill(0).map((_,index)=>( <ShimmerCard key={index} />))}
    </div>
   
  )
}

export default ShimmerUI
