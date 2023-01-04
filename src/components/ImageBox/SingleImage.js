import React from "react";
import { useParams } from "react-router-dom";

const SingleImage = () => {
  const { imageId } = useParams();
  // have to use GET request to fetch the single image from postId that was found using the params
  const links = [
    "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1616766098956-c81f12114571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1541112324160-e8a425b58dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <img src={links[imageId]} />
    </div>
  );
};

export default SingleImage;
