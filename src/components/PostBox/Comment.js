import React, { useEffect, useState } from "react";
import moment from "moment";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import SingleComment from "./SingleComment";
import { v4 } from "uuid";
const Comment = ({ post }) => {
  const { _id, title, content, comments } = post;
  const [user] = useAuthState(auth);
  const email = user?.email;

  const handleNewComment = (event) => {
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    event.preventDefault();
    // setCommentId(commentId + 1);
    const commentContent = event.target.usercomment.value;
    const newComment = {
      commentId: v4(),
      time,
      commentContent,
      commenter: email,
    };
    // setComments([...comment, newComment]);
    // console.log(newComment);
    alert(newComment.commentContent);
    fetch(`http://localhost:9000/singlepost/${_id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // setCommenter(data);
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // window.location.reload();
    event.target.reset();
  };

  return (
    <div className="my-2 ">
      <form className="relative" onSubmit={handleNewComment}>
        <input
          type="text"
          placeholder="Enter Comment"
          className="w-full rounded-lg h-[40px] pl-4 pr-20 text-sm italic outline-none shadow-inner shadow-gray-300"
          name="usercomment"
        />
        <label
          htmlFor="sendBtn"
          className="absolute top-1 z-40 right-3 text-3xl text-[#dc4734] hover:text-white bg-white hover:bg-[#dc4734] border-2 border-white duration-200 hover:border-[#dc4734] hover:rounded-full"
        >
          <BsArrowRightCircleFill></BsArrowRightCircleFill>
        </label>
        <input className="" id="sendBtn" type="submit" value="" />
      </form>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "4px 10px",
          margin: "10px 0",
        }}
      >
        {comments.length === 0 && (
          <p className="text-center">No comments yet</p>
        )}
        {comments.reverse().map((item) => (
          <SingleComment
            key={item.commentId}
            item={item}
            commenter={item.commenter}
            postId={_id}
          ></SingleComment>
        ))}
      </div>
    </div>
  );
};

export default Comment;
