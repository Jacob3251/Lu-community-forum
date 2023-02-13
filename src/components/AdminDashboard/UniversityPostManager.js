import { type } from "@testing-library/user-event/dist/type";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CiPen, CiTrash } from "react-icons/ci";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
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
    <div className="bg-white shadow-md shadow-gray-400 text-[#36454f] mb-8 pt-2 pb-3 px-5 rounded-md ">
      <div className="flex flex-col mt-2 ">
        <div className="flex justify-between">
          <b className="text-[#dc4734] font-bold text-[14px]">
            Type: <span className="text-[#36454f]">{type}</span>
          </b>
          {/* Time will go below here ============================ */}
          <div className="bg-white flex space-x-2">
            <FaPencilAlt className="text-[10px] w-10 h-10 p-2 text-[#36454f] rounded-full hover:bg-[#dc4734]  hover:text-white duraiton-300"></FaPencilAlt>
            <FaTrashAlt
              onClick={() => handlePostDelete(id)}
              className="text-[10px] w-10 h-10 p-2 text-[#36454f] rounded-full hover:bg-[#dc4734]   hover:text-white duraiton-300"
            ></FaTrashAlt>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-start">
        <h3 className="font-bold text-[14px]">{title}</h3>
        <i className="text-[10px]">Posted at: {time}</i>

        <p className="mb-5 text-[14px] mt-2">{content}</p>
      </div>
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
  }, [normalPosts]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = postInput.current[0].value;
    const content = postInput.current[2].value;
    const type = postInput.current[1].value;
    const username = profile[0]?.name;
    const email = user?.email;
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    const postObject = {
      title: title,
      name: username,
      content: content,
      email: email,
      type: type,
      time: time,
      postType: 0,
    };
    console.log(postInput);
    fetch(`http://localhost:9000/selectedpost`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(postObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
      });
  };
  //   const [post] = useUniversityPost();
  return (
    <div className="h-full grid grid-cols-7 place-content-center gap-x-5">
      <div className="col-span-5 ">
        <div className="mb-16">
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
      </div>
      <div className="w-full bg-gray-200 px-5 col-span-2 rounded-lg ">
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
      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default UniversityPostManager;
