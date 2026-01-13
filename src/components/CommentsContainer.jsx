import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constants";
import CommentsList from "./CommentList";


const CommentsContainer = ({videoId}) => {
  useEffect(()=>{
     getComments();
  },[videoId])
  
const [commentsD,setCommentsD]=useState([])
  const getComments=async()=>{
    const data=await fetch(COMMENTS_API+videoId);
    const json=await data.json();
    console.log(json);
   setCommentsD(json.items)

  }
  if(commentsD.length==0) return <h1 className="font-medium text-center text-2xl"> Comments</h1>
  return (
    <div className="">
      <h1 className="font-bold text-xl">Comments:</h1>
   {commentsD?.length > 0 && <CommentsList comments={commentsD} />}

    </div>
  );
};

export default CommentsContainer;
