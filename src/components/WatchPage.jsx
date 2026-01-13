import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggestedVideos from "./SuggestedVideos";
import WatchPageVideo from "./WatchPageVideo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [expanded, setExpand] = useState(false);
  const dispatch = useDispatch();
  const watchPageVideos = useSelector((store) => store.videos.watchPageVideos);

  const currentVideo = watchPageVideos.find(
    (v) => (v.id?.videoId || v.id) === searchParams.get("v")
  );

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col text-[#FFFFFF]">
      <div className="px-5 flex w-full">
        <WatchPageVideo
          currentVideo={currentVideo}
          searchParams={searchParams}
        />
        <div className="w-full ">
          <LiveChat />
        </div>
      </div>

      <div className="flex w-full h-svh">
        <div className="w-[68%] overflow-y-auto  scrollbar-hide p-4">
          <CommentsContainer videoId={searchParams.get("v")} />
        </div>
        <div className="w-[32%]  mt-4 overflow-y-auto scrollbar-hide  ">
          <SuggestedVideos />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
