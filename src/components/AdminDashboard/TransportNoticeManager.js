import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import useUniversityPost from "../../hooks/useUniversityPost";
import NoticeBox from "../Transport/NoticeBox";

const TransportNoticeManager = () => {
  const postInput = useRef();
  const [user] = useAuthState(auth);
  const [notices, setNotices] = useState([]);
  let x = 0;
  useEffect(() => {
    fetch("http://localhost:9000/transportnotice")
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
    fetch("http://localhost:9000/transportnotice", {
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
      <div className="w-full">
        <h3 className="text-[#3c2317] text-2xl font-bold text-center mb-10 ">
          Transport Notice Submission Form
        </h3>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} ref={postInput} className="w-full">
          <input
            type="text"
            name="title"
            placeholder="Enter Notice Title"
            className="w-full py-3 my-2 rounded-md pl-3"
          />
          <input
            type="text"
            name="link"
            placeholder="Enter Link"
            className="w-full py-3 my-2 rounded-md pl-3"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full my-2 py-3 bg-[#628e90] hover:bg-[#3c2317] text-white text-lg font-bold scale-95 hover:scale-100 duration-200 rounded-md"
          />
        </form>
      </div>
      <div className="w-[85%] px-14 mx-auto pt-10 pb-8 mt-5 rounded-2xl bg-[#628e90]">
        <h3 className="text-white text-2xl font-bold text-center mb-1 ">
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
