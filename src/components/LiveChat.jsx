import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generate } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const messages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generate(),
          message: "Hello friends how are you",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="border-2 border-black ml-4 rounded-lg bg-[#212121] text-[#FFFFFF] ">
      <div className="border-b border-black p-4 ">
        <h1 className="text-center font-medium text-lg">Top Chat</h1>
      </div>
      <div className="   w-full h-[500px] p-4 overflow-y-scroll scrollbar-hide flex flex-col-reverse  ">
        {messages.map((mes, index) => (
          <ChatMessages key={index} name={mes.name} message={mes.message} />
        ))}
      </div>
      <form
        action=""
        className=" border-t  w-full border-black p-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Charan",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="outline-1 w-[80%] px-4 py-2 rounded-2xl bg-[#303030]"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 py-2 m-1 rounded-2xl bg-[#FFFFFF] text-[#0F0F0F] font-medium">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
