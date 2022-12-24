import React from "react";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { HiPencilAlt } from "react-icons/hi";
import { BsBackspace } from "react-icons/bs";

import { FaImages } from "react-icons/fa";
import "./CreatePost.css";
const CreatePost = () => {
  const post = useRef();
  const [user] = useAuthState(auth);
  const [showCreatePost, setShowCreatePost] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.title.value);
    const title = post.current[0].value;
    const content = post.current[1].value;
    const email = user?.email;
    const likes = [];
    const comments = [{ email: "", content: "" }];
    const postObject = {
      title: title,
      content: content,
      email: email,
      likes: likes,
      comments: comments,
    };
    console.log(postObject);
    fetch("http://localhost:9000/generalposts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(postObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setShowCreatePost(0);
        e.target.reset();
      });
    console.log("from create post form: ", post.current[0].value);
  };
  return (
    <div className=" bg-[#628E90] w-[80%] hover:scale-105 duration-300 p-5 my-10  mx-auto text-center rounded-lg ">
      <div className="flex flex-col md:flex-row space-y-2 md:flex md:space-y-0 items-center justify-start ">
        {/* users profile image link will go here */}
        <div className="flex items-center justify-center space-x-1">
          <div className="w-12 h-12 rounded-full ring ring-transparent ring-offset-base-100 ring-offset-2">
            <img
              className="w-full h-full rounded-full"
              src="https://stat4.bollywoodhungama.in/wp-content/uploads/2020/08/Emraan-Hashmi.jpeg"
              alt=""
            />
          </div>
          <div className=" ">
            <h3 className="text-white font-bold">
              What's on your mind, UserName ?
            </h3>
          </div>
        </div>
        <div className="flex space-x-1 ml-1 items-center justify-center">
          <div>
            <button title="Add Post" onClick={() => setShowCreatePost(1)}>
              <HiPencilAlt className="w-8 h-8  text-white hover:scale-110 duration-100 hover:text-[#3C2317]"></HiPencilAlt>
            </button>
          </div>
          <div>
            <button onClick={() => setShowCreatePost(2)}>
              <FaImages className="w-8 h-8  text-white hover:scale-110 duration-100 hover:text-[#3C2317]"></FaImages>
            </button>
          </div>
          {showCreatePost !== 0 && (
            <div>
              <button onClick={() => setShowCreatePost(0)}>
                <BsBackspace className="w-7 h-7 text-white hover:scale-110 duration-100 hover:text-[#3C2317]"></BsBackspace>
              </button>
            </div>
          )}
        </div>
      </div>
      {showCreatePost === 1 && (
        <div data-aos="flip-down" className=" bg-[#faf0e6] rounded-md p-4 mt-4">
          <form
            ref={post}
            className="flex flex-col justify-content items-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              required
              name="title"
              type="text"
              placeholder="Enter Title"
              className="bg-[#628E90] placeholder-white text-white rounded-2xl w-full h-10 my-5 pl-4   hover:scale-95 duration-200 shadow-md  outline-white hover:shadow-gray-600 "
            />
            <textarea
              required
              name="content"
              type="text"
              placeholder="Enter Content"
              className="bg-[#628E90] placeholder-white hover:scale-95 duration-200 shadow-md outline-white  hover:shadow-gray-600 text-white rounded-2xl w-full  mb-5 h-20  pl-4  pt-2"
            />
            <button className="w-32  h-10 bg-[#628E90] hover:bg-white shadow-md hover:shadow-gray-600 hover:border-[#628E90] hover:border-2  hover:text-gray-600 text-white font-bold hover:translate-y-[-4px] duration-200">
              <input type="submit" value="Post" />
            </button>
          </form>
        </div>
      )}
      {showCreatePost === 2 && (
        <div data-aos="flip-down" className=" bg-[#faf0e6] rounded-md p-4 mt-4">
          <form
            ref={post}
            className="flex flex-col justify-content items-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              required
              name="title"
              type="text"
              placeholder="Enter Title"
              className="bg-[#628E90] placeholder-white text-white rounded-2xl w-full h-10 my-5 pl-4   hover:scale-95 duration-200 shadow-md  outline-white hover:shadow-gray-600 "
            />
            <input className="mb-5 w-full" type="file" name="" id="" />
            <button className="w-32  h-10 bg-[#628E90] hover:bg-white shadow-md hover:shadow-gray-600 hover:border-[#628E90] hover:border-2  hover:text-gray-600 text-white font-bold hover:translate-y-[-4px] duration-200">
              <input type="submit" value="Post" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
