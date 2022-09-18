import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useUniversityPost from "../../hooks/useUniversityPost";
import UniversityPostBox from "./UniversityPostBox";

const UniversityPostManager = () => {
  const postInput = useRef();
  const [user] = useAuthState(auth);

  const [newPostUniversity, setNewPostUniversity] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-plateau-06322.herokuapp.com/selectedpost")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(data[0].map((u) => u.newPostUniversity));
        setNewPostUniversity(data[0]);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = postInput.current[0].value;
    const content = postInput.current[2].value;
    const type = postInput.current[1].value;
    const email = user?.email;
    const postObject = {
      title: title,
      content: content,
      email: email,
      type: type,
      postType: 0,
    };
    console.log(postInput);
    fetch("https://cryptic-plateau-06322.herokuapp.com/selectedpost", {
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
      <div className="w-full bg-gray-200 py-10 px-5  rounded-lg mt-16">
        <h3 className="text-center text-3xl my-5 font-bold text-gray-700 ">
          Create New University Post
        </h3>
        <form onSubmit={handleSubmit} ref={postInput} className="flex flex-col">
          <div className="">
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              className="h-10 w-[35%] rounded-md pl-5 text-xl mb-5 mr-5"
            />
            <input
              type="text"
              name="type"
              placeholder="Enter Type like (imp,nes,cas)"
              className="h-10 w-[62%] rounded-md pl-5 text-xl  "
            />
          </div>
          <textarea
            name="content"
            className="w-full my-5 pl-5 pt-5 text-xl"
            placeholder="Enter Content..."
            cols="30"
            rows="5"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 h-14 hover:translate-y-[-5px] hover:duration-700 mt-5 text-xl font-semibold text-white hover:bg-blue-600"
          />
        </form>
      </div>
      <div>
        {newPostUniversity.map((u) => (
          <UniversityPostBox
            title={u.title}
            content={u.content}
            type={u.type}
            key={u._id}
          ></UniversityPostBox>
        ))}
      </div>
      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default UniversityPostManager;
