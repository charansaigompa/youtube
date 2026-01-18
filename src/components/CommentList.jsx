import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  
  return comments.map((comment, index) => (
    <div>
      <Comment key={comment.id} data={comment} />
      {/* <div className=" border-l-2  border-l-black pl-3 ml-5">
       
           <CommentsList comments={comment.replies}/>
    </div> */}
    </div>
  ));
};

export default CommentsList;
