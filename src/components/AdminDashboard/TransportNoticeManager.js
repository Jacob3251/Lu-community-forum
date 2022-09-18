import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useUniversityPost from "../../hooks/useUniversityPost";
import NoticeBox from "../Transport/NoticeBox";

const TransportNoticeManager = () => {
  const postInput = useRef();
  const [user] = useAuthState(auth);
  const [notices, setNotices] = useState([]);
  let x = 0;
  useEffect(() => {
    fetch("https://cryptic-plateau-06322.herokuapp.com/transportnotice")
      .then((res) => res.json())
      .then((data) => setNotices(data));
  }, [notices]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = postInput.current[0].value;
    const link = postInput.current[1].value;
    const email = user?.email;
    const postObject = {
      title: title,
      link: link,
      email: email,
    };
    fetch("https://cryptic-plateau-06322.herokuapp.com/transportnotice", {
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
    <div>
      <div className="w-5/6 mx-auto">
        <h3 className="text-center text-3xl my-5 font-bold text-gray-700 ">
          Create Transport Post
        </h3>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} ref={postInput} className="w-full">
          <input
            type="text"
            name="title"
            placeholder="Enter Notice Title"
            className="w-full h-14 bg-gray-200 my-2 pl-8 text-xl"
          />
          <input
            type="text"
            name="link"
            placeholder="Enter Link"
            className="w-full h-14 bg-gray-200 my-2 pl-8 text-xl"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full h-14 text-xl font-semibold text-white bg-blue-600 my-2 hover:translate-y-[-4px] hover:bg-blue-400 duration-700"
          />
        </form>
      </div>
      <div className="w-5/6 mx-auto pt-10">
        <h3 className="text-center text-3xl my-5 font-bold text-gray-700 ">
          Manage Transport Posts
        </h3>
        <div className="divider"></div>

        {notices.map((u) => (
          <NoticeBox
            key={u._id}
            number={++x}
            title={u.title}
            link={u.link}
            id={u._id}
          ></NoticeBox>
        ))}
      </div>
      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default TransportNoticeManager;
