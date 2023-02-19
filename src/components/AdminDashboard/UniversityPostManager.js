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
    fetch(
      `https://lu-community-forum-backend.up.railway.app/selectedpost/unipost/${id}`,
      {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // window.location.reload();
  };
  return (
    <div className="bg-white shadow-md shadow-gray-400 hover:drop-shadow-md text-[#36454f] mb-8 pt-2 pb-3 px-5">
      <div className="flex flex-col mt-2 ">
        <div className="flex justify-between">
          <b className="text-[#dc4734] font-bold text-[14px]">
            Type: <span className="text-[#36454f]">{type}</span>
          </b>
          {/* Time will go below here ============================ */}
          <div className="bg-white flex space-x-2">
            <div
              onClick={() => handlePostDelete(id)}
              className="text-[18px]  p-2 text-[#36454f] rounded-full hover:bg-[#dc4734]   hover:text-white duraiton-300"
            >
              <FaTrashAlt></FaTrashAlt>
            </div>
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
    fetch(
      "https://lu-community-forum-backend.up.railway.app/selectedpost/unipost"
    )
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
    fetch(`https://lu-community-forum-backend.up.railway.app/selectedpost`, {
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
    <div className="h-full flex flex-col-reverse md:flex-row  mt-5 lg:mt-0 mx-2 pr-0  md:pr-2 justify-center md:justify-between md:space-x-2 items-start ">
      <div className="w-full mt-5 md:mt-0">
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
      <div className="w-full">
        <div className="bg-white shadow-md shadow-gray-500 px-3">
          <h3 className="text-[#36454f]  text-[14px] font-bold text-center pt-5 mb-5 ">
            University Post Form
          </h3>
          <form
            onSubmit={handleSubmit}
            ref={postInput}
            className="flex flex-col space-y-2 pb-10"
          >
            <input
              type="text"
              name="title"
              placeholder="Enter University Post Title"
              className="w-full shadow-inner p-2 placeholder:text-[12px] outline-none shadow-gray-500 placeholder:shadow-gray-400"
            />
            <input
              type="text"
              name="type"
              placeholder="Enter Post Importance"
              className="w-full shadow-inner p-2 placeholder:text-[12px] outline-none shadow-gray-500 placeholder:shadow-gray-400"
            />
            <textarea
              name="content"
              className="w-full shadow-inner p-2 placeholder:text-[12px] outline-none shadow-gray-500 placeholder:shadow-gray-400"
              placeholder="Enter University Post Details"
              cols="20"
              rows="3"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              style={{
                cursor: "pointer",
              }}
              className="w-full py-2 bg-[#dc4734] border-2 border-[#dc4734] text-white hover:text-[#dc4734] hover:bg-white text-[14px] font-bold  duration-200 "
            />
          </form>
        </div>
      </div>
      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default UniversityPostManager;
