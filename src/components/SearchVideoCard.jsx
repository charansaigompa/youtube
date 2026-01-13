const SearchVideoCard = ({info}) => {
   // console.log(info)
    const {snippet}=info;
    const {channelTitle,title,thumbnails}=snippet

  return (
    <div className='p-2 m-2 w-72  hover:bg-[#2A2A2A] shadow-lg rounded-xl text-[#FFFFFF] bg-[#212121]'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="img" />
        <ul>
            <li className='video-title'>{title}</li>
            <li>{channelTitle}</li>
          
        </ul>
      
    </div>
  )
}

export default SearchVideoCard