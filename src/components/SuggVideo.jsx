import React from 'react'

const SuggVideo = ({video}) => {
    const {snippet,statistics}=video;
    const {channelTitle,title,thumbnails}=snippet
  return (
    <div className='w-full flex p-2 bg-[#212121]  hover:bg-[#2A2A2A] text-[#FFFFFF]'>
    
       <img className='rounded-lg w-45 mr-1.5' src={thumbnails.medium.url} alt="img" />
              <ul>
                  <li className='video-title'>{title}</li>
                  <li>{channelTitle}</li>
                  
              </ul>

    </div>
  )
}

export default SuggVideo




