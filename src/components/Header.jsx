import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useHandleSearchVideoAPI } from "../hooks/useHandleSearchVideoApi";

const Header = () => {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [sugBox, setSugBox] = useState(false);
  const handleSearch = useHandleSearchVideoAPI();
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    if (!searchQuery) return;
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else getSearchSuggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col p-3  shadow-lg bg-[#0F0F0F]">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-8 m-2"
          src="https://tse4.mm.bing.net/th/id/OIP.J3re3VyPQSCabHjyQI2TiAHaHa?pid=Api&P=0&h=180"
          alt="menu"
        />
        <img
          className="h-12 mx-2"
          src="https://tse1.mm.bing.net/th/id/OIP.iDZzfhJwEwaRvnMUXZOd2wHaEG?pid=Api&P=0&h=180"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 ">
        <form
          className="flex justify-center relative"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchQuery);
          }}
        >
          <input
            ref={inputRef}
            type="text"
            className=" w-1/2 border border-gray-400 px-5 py-2 text-[#FFFFFF] rounded-l-full"
            value={searchQuery}
            onChange={(e) => {
              const text = e.target.value;
              setSearchQuery(e.target.value);
              if (text !== "") {
                setSugBox(true);
              } else {
                setSugBox(false);
              }
            }}
            onBlur={() => {
              setSugBox(false);
            }}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-[#303030] ">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.TSoEDW4tts1Q-zUTOe3ovgHaHa?pid=Api&P=0&h=180"
              alt="img"
              className="h-8 w-8"
            />
          </button>
        </form>
        {sugBox && (
          <div className="absolute m-1 text-[#FFFFFF] left-120  w-[33rem] px-5 py-3 rounded-lg bg-[#181818] border border-amber-50">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-3 py-2  hover:bg-[#303030]"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setSearchQuery(s);
                    setSugBox(false);
                    inputRef.current.focus();
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
