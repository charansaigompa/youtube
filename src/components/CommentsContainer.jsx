import React from "react";

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

const Comment=({data})=>{
    const{name,text,replies}=data;
    return(
        <div className="flex shadow-lg bg-gray-100  p-2 m-2">
          <img className="w-12 h-9" src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="profile" />
        <div>
            <p className="font-bold">{name}</p>
            <p className="font-bold">{text}</p>
        </div>
        </div>
    )
}
const CommentsList=({comments})=>{
    return comments.map((comment,index)=>(
        <div>
    <Comment key={index} data={comment} />
    <div className=" border-l-2  border-l-black pl-3 ml-5">
       
           <CommentsList comments={comment.replies}/>
    </div>

    </div>

))
}

const CommentsContainer = () => {
  return (
    <div className="w-[67%]">
      <h1 className="font-bold">Comments</h1>
      <CommentsList comments={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
