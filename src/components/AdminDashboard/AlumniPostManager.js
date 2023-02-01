import React from "react";

const AlumniPostManager = () => {
  return (
    <div>
      <form className="bg-white p-5 w-full flex flex-col justify-center items-center rounded-md">
        <h3 className="text-center mt-4 mb-8 font-bold text-lg">
          Alumni Post Submission
        </h3>
        <input
          type="text"
          required
          name="name"
          className="w-[90%] my-2 rounded-md bg-slate-200 py-3 pl-3 mx-auto"
          placeholder="Enter name..."
        />
        <input
          type="text"
          required
          name="position"
          className="w-[90%] my-2 rounded-md bg-slate-200 py-3 pl-3 mx-auto"
          placeholder="Enter position..."
        />
        <input
          type="text"
          required
          name="desc"
          className="w-[90%] my-2 rounded-md bg-slate-200 py-3 pl-3 mx-auto"
          placeholder="Enter description"
        />
        <div className="flex flex-row justify-center items-center justify-evenly">
          <input
            required
            type="file"
            multiple
            onChange={(e) => e.target.files}
            className=" w-full  scale-95"
            // style={{ visibility: "hidden" }}
          />
          <button
            // disabled={imglingProfilePicUploadStatus ? true : false}
            className={`w-full rounded-md  bg-slate-100 font-bold  my-3 text-lg py-3 scale-95 duration-200  `}
          >
            Uploaded
          </button>
        </div>
        <input
          type="submit"
          className="py-2 font-bold text-lg rounded-md scale-95 hover:scale-100 duration-200 px-3 bg-[#628e90] hover:bg-[#3c2317] text-white "
        />
      </form>
    </div>
  );
};

export default AlumniPostManager;
