const SearchVideoCard = ({info}) => {
   // console.log(info)
    const {snippet}=info;
    const {channelTitle,title,thumbnails}=snippet

  return (
    <div className='p-2 m-2 w-72 h-70 shadow-lg rounded-xl'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="img" />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
          
        </ul>
      
    </div>
  )
}

export default SearchVideoCard