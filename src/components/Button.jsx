import React from 'react'
import { useHandleSearchVideoAPI } from '../hooks/useHandleSearchVideoApi'


const Button = ({name}) => {
  const handleSearch=useHandleSearchVideoAPI()
  return (
    <div>
      <button 
       onClick={()=>{
        handleSearch(name)
       }}
       className='px-5 bg-[#303030] text-[#FFFFFF] rounded-lg py-2 m-2'>{name}</button>
    </div>
  )
}

export default Button
