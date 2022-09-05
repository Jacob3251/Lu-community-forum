import React from "react";

const CreatePost = () => {
  return (
    <div className="h-[150px] bg-slate-200 w-full pr-6 my-10 rounded-lg flex justify-around items-center">
      <div className="h-full  w-1/3 bg-slate-100 rounded-l-lg flex justify-center items-center text-2xl font-semibold">
        <h2 className="">Create Post</h2>
      </div>
      <form className="flex flex-col justify-content items-center w-2/3">
        <input
          required
          type="text"
          placeholder="Enter Title"
          className=" w-full max-w-xs my-3 h-8 rounded-lg pl-4  "
        />
        <input
          required
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
