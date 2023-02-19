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
    fetch("https://lu-community-forum-backend.up.railway.app/transportnotice")
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
    fetch("https://lu-community-forum-backend.up.railway.app/transportnotice", {
      method: "POST",
      headers: { "content-type": "application/json" },
    });
  };
  //   const [post] = useUniversityPost();
  return (
    <div className="mb-20 flex mt-5 lg:mt-0 w-[95%] mx-auto lg:space-x-5 flex-col-reverse lg:flex-row items-start justify-center ">
      <div className="w-full  py-2 mx-auto  px-5  bg-white shadow-gray-500 shadow-md hover:drop-shadow-md">
        <h3 className="text-[#36454f] text-[14px] font-bold text-center mt-2 mb-2 ">
          Manage Transport Posts
        </h3>
        <div className="divider my-0 p-0"></div>

        {notices.length !== 0 ? (
          notices.map((u) => (
            <NoticeBox
              key={u._id}
              number={++x}
              title={u.title}
              link={u.link}
              id={u._id}
            ></NoticeBox>
          ))
        ) : (
          <div className="text-center text-[#36454f] text-[14px] py-5">
            No Transport Notice set yet
          </div>
        )}
      </div>
      <div className="w-full justify-center items-center  mb-5 lg:mb-0 flex">
        <div className="bg-white w-full shadow-[#36454f] shadow-md hover:drop-shadow-lg  ">
          <h3 className="text-[#36454f] text-[14px] font-bold text-center  pt-3">
            Transport Notice Form
          </h3>
          <form onSubmit={handleSubmit} ref={postInput} className="w-full p-2">
            <input
              type="text"
              name="title"
              placeholder="Enter Notice Title"
              className="w-full py-3 my-2  pl-3 shadow-inner shadow-gray-500 outline-none"
            />
            <input
              type="text"
              name="link"
              placeholder="Enter Link"
              className="w-full py-3 my-2  pl-3 shadow-inner shadow-gray-500 outline-none"
            />
            <input
              type="submit"
              value="Submit"
              className="w-full my-2 py-3 bg-[#dc4734] hover:bg-white duration-200 text-white hover:text-[#dc4734] border-2 border-[#dc4734] text-[14px] font-bold "
            />
          </form>
        </div>
      </div>

      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default TransportNoticeManager;
