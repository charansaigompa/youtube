import React, {  useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useVideos } from '../hooks/useVideos'
import { addWatchPageVideos } from '../utils/videosSearch'
import ShimmerUI from './ShimmerUI'


const VideoContainer = () => {
const dispatch=useDispatch()
const videos=useVideos()
if(videos) dispatch(addWatchPageVideos(videos));

  if(!videos)return <ShimmerUI/>;  

  return (
    <div className='flex flex-wrap '>
      
    {videos.map((v)=>( <Link to={"/watch?v="+v.id}> <VideoCard key={v.id} info={v} /></Link>))}
   
    </div>
  )
}

export default VideoContainer
