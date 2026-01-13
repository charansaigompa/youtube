import React, { useState } from "react";
import { useSelector } from "react-redux";
import SuggVideo from "./SuggVideo";
import { Link } from "react-router-dom";
import { useVideos } from "../hooks/useVideos";

const SuggestedVideos = () => {
  const mainVideos = useVideos();
  const watchPageVideos = useSelector((store) => store.videos.watchPageVideos);
  const recomendedVideos = watchPageVideos.length
    ? watchPageVideos
    : mainVideos;
  if (!recomendedVideos) return null;

  return (
    <div className=" w-full">
      {recomendedVideos.map((v) => (
        <Link to={"/watch?v=" + v.id}>
          <SuggVideo key={v.id} video={v} />
        </Link>
      ))}
    </div>
  );
};

export default SuggestedVideos;
