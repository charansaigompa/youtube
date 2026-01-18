import React from 'react'
import { formatViews } from '../utils/formatViews';

const VideoCard = ({info}) => {
  
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet

  return (
    <div className='p-2 m-2 w-72  shadow-lg rounded-xl bg-[#212121] text-[#FFFFFF] hover:bg-[#2A2A2A]'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="img" />
        <ul>
            <li className='video-title'>{title}</li>
            <li>{channelTitle}</li>
            <li>{formatViews(statistics.viewCount)} views</li>
        </ul>
      
    </div>
  )
}

export default VideoCard
