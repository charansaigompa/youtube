import React from 'react'

const ChatMessages = ({name,message}) => {
  return (
    <div className='flex m-1 p-1'>
      <img className='h-7' src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="" />
      <span className='font-bold mr-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessages
