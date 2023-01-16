import React from "react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import { FaTrash, FaExclamationTriangle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Comment from "./Comment";

const PostBox = ({ post }) => {
  const [showComment, setShowComment] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [likeColor, setLikeColor] = useState(false);
  const { _id, name, title, content, email, likes, comments, time } = post;

  // const [userdata, setUserdata] = useState({});
  const [user] = useAuthState(auth);
  // console.log(name);
  const handleLiked = () => {
    setLikeColor(!likeColor);
    fetch(`http://localhost:9000/generalposts/${_id}++${user?.email}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleReport = () => {
    const found = window.confirm("Do you want to report this post?");
    if (found) {
      const reportedPost = {
        postId: _id,
        postedBy: name,
        postTitle: title,
        content,
        time,
        comments,
      };
      fetch("http://localhost:9000/generalposts/reported", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reportedPost),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const handleDelete = () => {
    const found = window.confirm("Do you want to delete your post?");
    console.log(found);
    if(found){
      fetch(`http://localhost:9000/generalposts/${_id}`, {
      method: "DELETE", // or 'PUT'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  };
  // useEffect(() => {
  //   fetch(`http://localhost:9000/users/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserdata(data);
  //     });
  // }, []);
  return (
    <div className="w-[80%] mx-auto">
      <div className="bg-[#628E90]  rounded-2xl mx-auto my-5 shadow-lg">
        {/* top part  */}
        <div
          className={`w-full flex md:flex-row items-center justify-between px-5 mx-auto  pt-1  ${
            showOptions && "flex-col"
          }`}
        >
          <div className="flex pt-6 pb-2 ">
            <div>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-transparent ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </div>
            <div className="ml-4">
              <div className="font-medium text-md text-[#F5EFE6] ">
                {name !== undefined ? name : "No name"}
              </div>
              <div className="font-normal text-[#F5EFE6] italic text-sm">
                {time}
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-2 ">
            <button
              className="btn btn-ghost text-[#F5EFE6]"
              onClick={() => setShowOptions(!showOptions)}
            >
              <HiDotsVertical className="h-5 w-5 mr-2"></HiDotsVertical>
            </button>
            {showOptions && (
              <div>
                {email !== user?.email && (
                  <button
                    onClick={handleReport}
                    className="btn bg-orange-500 border-0 text-white"
                  >
                    <FaExclamationTriangle></FaExclamationTriangle>
                  </button>
                )}
                {email === user?.email && (
                  <button
                    onClick={handleDelete}
                    className="btn bg-red-500 border-0 text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {/* content part */}
        <div className="w-full px-6 mx-auto text-left pb-2 ">
          <h3 className="text-[#3C2317] font-bold">{title}</h3>
          <div className="mt-1 ">
            <p className="text-base text-[#F5EFE6]">{content}</p>
          </div>
          <div className=" py-3">
            <div className="flex justify-between mb-2">
              <div className="text-[#F5EFE6]">
                {" "}
                {likes.length} Likes . {comments.length} Comments
              </div>
              {/* <div className="text-[#F5EFE6]"> 60 comments</div> */}
            </div>
            <hr />
            <div className="flex justify-between">
              <div className="flex  ">
                <button
                  className={`btn btn-ghost ${
                    likes.find((u) => u === user?.email)
                      ? "text-yellow-500"
                      : "text-[#F5EFE6]"
                  }`}
                  onClick={handleLiked}
                >
                  <HandThumbUpIcon className="h-6 w-6 mr-2" /> Like
                </button>
                <button
                  className="btn btn-ghost text-[#F5EFE6]"
                  onClick={() => setShowComment(!showComment)}
                >
                  Comment
                </button>
              </div>
            </div>
            {showComment && <Comment post={post}></Comment>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
