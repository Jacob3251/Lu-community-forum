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

    const postObject = {
      title: title,
      content: content,
      email: email,
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
        e.target.reset();
      });
    console.log("from create post form: ", post.current[0].value);
  };
  return (
    <div className="h-[150px] bg-slate-200 w-full pr-6 my-10 rounded-lg flex justify-around items-center">
      <div className="h-full  w-1/3 bg-slate-100 rounded-l-lg flex justify-center items-center text-2xl font-semibold">
        <h2 className="">Create Post</h2>
      </div>
      <form
        ref={post}
        className="flex flex-col justify-content items-center w-2/3"
        onSubmit={handleSubmit}
      >
        <input
          required
          name="title"
          type="text"
          placeholder="Enter Title"
          className=" w-full max-w-xs my-3 h-8 rounded-lg pl-4  "
        />
        <input
          required
          name="content"
          type="text"
          placeholder="Enter Content"
          className=" w-full max-w-xs mb-3 h-8 rounded-lg pl-4  "
        />
        <button className="w-32  h-8 bg-blue-200 rounded-lg">
          <input type="submit" value="Post" />
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
