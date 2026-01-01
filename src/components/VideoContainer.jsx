import React, {  useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'





const VideoContainer = () => {
const [videos,setVideos]=useState([])
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_API);
    const json=await data.json()
   
    setVideos(json.items)
    console.log(json)
    console.log(json.items)
  }

  return (
    <div className='flex flex-wrap '>
      
    {videos.map((v)=>( <Link to={"/watch?v="+v.id}> <VideoCard key={v.id} info={v} /></Link>))}
    </div>
  )
}

export default VideoContainer
