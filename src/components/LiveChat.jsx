import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { generate } from '../utils/helper'




const LiveChat = () => {
  const dispatch=useDispatch()
  const messages=useSelector(store=>store.chat.message);
  useEffect(()=>{
    const i=setInterval(()=>{
     dispatch(addMessages({
      name:generate(),
      message:"Hello friends how are you"
     }))
    },500)
     return ()=>clearInterval(i)
  
  },[])
  return (
    <div
    className='border-black border-2 w-full h-[600px] ml-4 p-4 overflow-y-scroll flex flex-col-reverse  '>
      {
        messages.map((mes,index)=>(<ChatMessages key={index} name={mes.name} message={mes.message}/>))
      }
      
     
    </div>
  )
}

export default LiveChat
