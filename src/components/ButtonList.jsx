import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list =  [
  "All",
  "Sports",
  "News",
  "Movies",
  "Music",
  "Live",
  "Gaming",
  "Podcasts",
  "Comedy",
  "Cricket",
  "Technology",
  "Trailers",
  "Fitness",
  "Food",
  "Education",
];
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2">
      <div className="flex gap-3">
        {list.map((e) => (
          <Button key={e} name={e} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
