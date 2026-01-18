import React from "react";

const Comment = ({ data }) => {
  const { snippet } = data;
  const { topLevelComment } = snippet;
  
  return (
    <div className="flex shadow-lg  p-2 m-2 bg-[#212121] text-amber-50">
      <img
        className="w-12 h-12  rounded-full"
        src={
          topLevelComment.snippet.authorProfileImageUrl ||
          "https://www.gravatar.com/avatar/?d=mp"
        }
        alt="profile"
        onError={(e) => {
          e.target.src = "https://www.gravatar.com/avatar/?d=mp";
        }}
      />
      <div className="ml-2">
        <p className="font-bold">{topLevelComment.snippet.authorDisplayName}</p>
        <p className="font-16px">{topLevelComment.snippet.textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
