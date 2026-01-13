import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API } from "../utils/constants";
import { addMostPopularVideos } from "../utils/videosSearch";





export const useVideos=()=>{
 const videos=useSelector(store=>store.videos.mostPopularVideos)
    const dispatch=useDispatch();


  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_API);
    const json=await data.json()
   
    
  dispatch(addMostPopularVideos(json.items))
   // console.log(json)
   // console.log(json.items)
  }
   useEffect(()=>{
    if(!videos){
       getVideos();
    }
   
  },[videos])
   
  return videos;
}