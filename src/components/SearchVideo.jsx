
import { useSelector } from 'react-redux'
import SearchVideoCard from './SearchVideoCard'
import { Link } from 'react-router-dom'



const SearchVideo = () => {
    const videos=useSelector(store=>store.videos.searchedVideos)
    console.log(videos)
  return (
    <div className='flex flex-wrap '>
      
    {videos.map((v)=>( <Link to={"/watch?v="+v.id.videoId}> <SearchVideoCard key={v.id.videoId} info={v} /></Link>))}
    </div>
  )
}

export default SearchVideo
