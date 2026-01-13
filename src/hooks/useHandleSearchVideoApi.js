import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVideos, addWatchPageVideos } from "../utils/videosSearch";
import { YOUTUBE_SEARCHED_VIDEO_API } from "../utils/constants";

export const useHandleSearchVideoAPI = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async (searchQuery) => {
    if (!searchQuery) return;

    const data = await fetch(YOUTUBE_SEARCHED_VIDEO_API + searchQuery);
    const json = await data.json();

    dispatch(addVideos(json.items));
    dispatch(addWatchPageVideos(json.items));
    navigate("/searchvideos");
  };

  return handleSearch;
};

