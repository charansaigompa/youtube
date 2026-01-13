import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constants";
import CommentsList from "./CommentList";


const commentsData = [
  {
    name: "Charan",
    text: "this is the example comment for learning purpose",
    replies: [],
  },
  {
    name: "Charan",
    text: "this is the example comment for learning purpose",
    replies: [
      {
        name: "Charan",
        text: "this is the example comment for learning purpose",
        replies: [
          {
            name: "Charan",
            text: "this is the example comment for learning purpose",
            replies: [
              {
                name: "Charan",
                text: "this is the example comment for learning purpose",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Charan",
        text: "this is the example comment for learning purpose",
        replies: [],
      },
    ],
  },
  {
    name: "Charan",
    text: "this is the example comment for learning purpose",
    replies: [],
  },
  {
    name: "Charan",
    text: "this is the example comment for learning purpose",
    replies: [],
  },
  {
    name: "Charan",
    text: "this is the example comment for learning purpose",
    replies: [],
  },
  {
    name: "Charan",
    text: "this is the example comment for learning purpose",
    replies: [],
  },
]

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
  
  return (
    <div className="">
      <h1 className="font-bold text-xl">Comments:</h1>
   {commentsD?.length > 0 && <CommentsList comments={commentsD} />}

    </div>
  );
};

export default CommentsContainer;
