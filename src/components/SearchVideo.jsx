
import { useDispatch, useSelector } from 'react-redux'
import SearchVideoCard from './SearchVideoCard'
import { Link } from 'react-router-dom'
import { addWatchPageVideos } from '../utils/videosSearch'
import ShimmerUI from './ShimmerUI'
import { useEffect } from 'react'




const SearchVideo = () => {

 
  const dispatch=useDispatch()
    const videos=useSelector(store=>store.videos.searchedVideos)
    console.log(videos)
     useEffect(()=>{
 if(videos) dispatch(addWatchPageVideos(videos))
  },[videos])
   
      if(videos.length==0) return<ShimmerUI/>
  return (
    <div className='flex flex-wrap '>
      
    {videos.map((v)=>( <Link to={"/watch?v="+v.id.videoId}> <SearchVideoCard key={v.id.videoId} info={v} /></Link>))}
    </div>
  )
}

export default SearchVideo
