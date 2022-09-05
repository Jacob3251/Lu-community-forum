import React from "react";

const CreatePost = () => {
  return (
    <div className="h-[150px] bg-slate-100 w-3/4 mx-auto my-6 rounded-lg ">
      <form className="flex flex-col justify-content items-center">
        <input
          required
          type="text"
          placeholder="Enter Title"
          className=" w-full max-w-xs my-4 h-8 rounded-lg pl-4  "
        />
        <input
          required
          type="text"
          placeholder="Enter Content"
          className=" w-full max-w-xs mb-4 h-8 rounded-lg pl-4  "
        />
        <button className="w-32 h-8 bg-blue-200 rounded-lg">
          <input type="submit" value="Post" />
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
