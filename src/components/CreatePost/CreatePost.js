import React from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const CreatePost = () => {
  const post = useRef();
  const [user] = useAuthState(auth);

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
    fetch("https://cryptic-plateau-06322.herokuapp.com/generalposts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(postObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
      });
    console.log("from create post form: ", post.current[0].value);
  };
  return (
    <div className=" bg-gray-200 w-2/5 p-5 my-10  mx-auto text-center">
      <div className="  text-center text-3xl font-semibold">
        <h2 className="">Create Post</h2>
      </div>
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
          className=" w-full h-10 my-5 pl-4   hover:translate-y-[2px] duration-700 "
        />
        <textarea
          required
          name="content"
          type="text"
          placeholder="Enter Content"
          className=" w-full  mb-10 h-20  pl-4  "
        />
        <button className="w-32  h-10 bg-blue-400 hover:bg-blue-500 hover:translate-y-[-4px] duration-700">
          <input type="submit" value="Post" />
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
