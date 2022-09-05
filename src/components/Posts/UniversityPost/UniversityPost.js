import React from "react";

const UniversityPost = (props) => {
  //   console.log(props.posts);
  const post = props.post;
  return (
    <div className="bg-red-400 h-10">
      <h2>{post.title}</h2>
      <h2>{post.content}</h2>
    </div>
  );
};

export default UniversityPost;
