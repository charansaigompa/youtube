import React, { useState } from "react";

const WatchPageVideo = ({ currentVideo, searchParams }) => {
  const [expanded, setExpand] = useState(false);
  return (
    <div>
      <iframe
        className="rounded-xl"
        width="1000"
        height="600"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {currentVideo && (
        <div>
          <h1 className=" font-bold text-lg m-2">
            {currentVideo.snippet.title}{" "}
          </h1>
          <div className="mt-2 mb-2">
            <div className="flex ">
              <img
                className="h=20 w-16"
                src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png"
                alt="channel"
              />
              <h2 className="text-center p-0 mt-2 mr-4 font-medium">
                {currentVideo.snippet.channelTitle}
              </h2>
              <button className="bg-[#FFFFFF] font-medium text-black rounded-3xl px-3">
                subscribe
              </button>
            </div>
          </div>
          <h2
            onClick={() => setExpand(!expanded)}
            className={`bg-[#303030] m-2 w-250 p-2 font-medium text-16px leading-relaxed  rounded-2xl  ${
              expanded ? "line-clamp-none" : "line-clamp-2"
            }`}
          >
            {currentVideo.snippet.description}
          </h2>
        </div>
      )}
    </div>
  );
};

export default WatchPageVideo;
