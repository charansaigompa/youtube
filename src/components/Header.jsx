import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCHED_VIDEO_API } from "../utils/constants";
import { addVideos } from "../utils/videosSearch";
import { useNavigate } from "react-router-dom";





const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [sugBox, setSugBox] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const searchCache = useSelector((store) => store.search);


  const handleSearchVideoAPI=async()=>{
    const data= await fetch(YOUTUBE_SEARCHED_VIDEO_API+searchQuery)
    const json=await data.json();
    console.log(json);
    dispatch(addVideos(json.items))
    navigate("/searchvideos")







  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    if (!searchQuery) return;
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else getSearchSuggestion();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-12"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
        />
        <img
          className="h-12 mx-2"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 relative">
        <div className="flex">
          <input
            type="text"
            className=" w-1/2 border border-gray-400 px-5 py-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setSugBox(true);
            }}
            onBlur={() => {
              setSugBox(false);
            }}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 "
          onClick={handleSearchVideoAPI}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/015/397/473/original/magnifying-glass-icon-glass-search-magnifier-loupe-find-zoom-symbol-sign-free-vector.jpg"
              alt="img"
              className="h-8 w-6"
            />
          </button>
        </div>
        {sugBox && (
          <div className="absolute bg-white w-[33rem] px-5 py-3 rounded-lg border border-gray-50">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-3 py-2  hover:bg-gray-50"
                   onMouseDown={() => {
                        setSearchQuery(s);   
                           
          }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-12"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
