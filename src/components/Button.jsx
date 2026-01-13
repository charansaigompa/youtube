import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 bg-[#303030] text-[#FFFFFF] rounded-lg py-2 m-2'>{name}</button>
    </div>
  )
}

export default Button
