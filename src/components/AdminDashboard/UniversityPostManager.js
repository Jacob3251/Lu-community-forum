import { type } from "@testing-library/user-event/dist/type";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CiPen, CiTrash } from "react-icons/ci";
import { auth } from "../../firebase.init";
import useSingleUser from "../../hooks/useSingleUser";
import useUniversityPost from "../../hooks/useUniversityPost";
import UniversityPostBox from "./UniversityPostBox";

const UniversitySpecificPostBox = ({
  title,

  id,
  content,
  email,
  time,
  type,
}) => {
  const handlePostDelete = (id) => {
    const data = { stat: null };
    alert(id);
    fetch(`http://localhost:9000/selectedpost/unipost/${id}`, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload();
  };
  return (
    <div className="bg-[#628e90] text-white my-8 p-5 rounded-md ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="bg-white flex py-2 rounded-xl px-2">
          <CiPen className="text-2xl text-[#3c2317] p-1 h-10 w-10 rounded-full hover:bg-green-500 hover:text-white duraiton-300"></CiPen>
          <CiTrash
            onClick={() => handlePostDelete(id)}
            className="text-2xl text-[#3c2317] p-1 h-10 w-10 rounded-full hover:bg-red-500 hover:text-white duraiton-300"
          ></CiTrash>
        </div>
      </div>
      <div className="flex flex-col my-3">
        <b className="text-[#3c2317] text-lg">Type:{type}</b>
        {/* Time will go below here ============================ */}
        <i className="text-xs">Posted at: {time}</i>
      </div>
      <p className="mb-5">{content}</p>
    </div>
  );
};

const UniversityPostManager = () => {
  const postInput = useRef();
  const [user] = useAuthState(auth);
  const [normalPosts, setNormalPosts] = useState([]);
  const profile = useSingleUser(user?.email);
  const [uniNormalPostLoading, setUniNormalPostLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:9000/selectedpost/unipost")
      .then((res) => res.json())
      .then((data) => {
        setNormalPosts(data);
        setUniNormalPostLoading(false);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = postInput.current[0].value;
    const content = postInput.current[2].value;
    const type = postInput.current[1].value;
    const email = user?.email;
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    const postObject = {
      title: title,
      content: content,
      email: email,
      type: type,
      time: time,
      postType: 0,
    };
    console.log(postInput);
    fetch(
      `http://localhost:9000/selectedpost/${
        user?.email + "***" + profile[0]?.userType
      }`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(postObject),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
      });
  };
  //   const [post] = useUniversityPost();
  return (
    <div className="h-full">
      <div className="w-full bg-gray-200 px-5  rounded-lg ">
        <h3 className="text-[#3c2317] text-2xl font-bold text-center mb-10 ">
          University Post Submission Form
        </h3>
        <form onSubmit={handleSubmit} ref={postInput} className="flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Enter University Post Title"
            className="w-full py-3 my-2 pl-3 rounded-md"
          />
          <input
            type="text"
            name="type"
            placeholder="Enter Post Importance"
            className="w-full py-3 my-2 pl-3 rounded-md"
          />
          <textarea
            name="content"
            className="w-full py-3 my-2 pl-3 rounded-md"
            placeholder="Enter University Post Details"
            cols="30"
            rows="4"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="w-full my-2 py-3 bg-[#628e90] hover:bg-[#3c2317] text-white text-lg font-bold scale-95 hover:scale-100 duration-200 rounded-md"
          />
        </form>
      </div>
      <h2 className="text-[#3c2317] text-2xl font-bold text-center my-10">
        Manage University Posts
      </h2>
      <div className="mb-16 h-[50vh] overflow-auto">
        {normalPosts.map((post) => (
          <UniversitySpecificPostBox
            key={post._id}
            title={post.title}
            id={post._id}
            content={post.content}
            email={post.email}
            type={post.type}
            time={post.time ? post.time : null}
          ></UniversitySpecificPostBox>
        ))}
      </div>
      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default UniversityPostManager;
