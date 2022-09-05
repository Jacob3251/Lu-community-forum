import React from "react";
import Header from "../Header/Header";
const Library = () => {
  return (
    <div className=" w-4/5 mx-auto py-10">
      <Header></Header>
      <div className="w-2/3 my-10  mx-auto bg-slate-200 py-10 rounded-xl shadow-lg ">
        <div className="text-center">
          <div>
            <h1 className="bg-blue-200 w-5/6 mx-auto text-xl font-bold outline outline-2 outline-offset-0 outline-gray-500 rounded-md py-2">
              Library System
            </h1>
          </div>
        </div>

        <div className="form-control w-2/3 mx-auto max-w-xs my-3">
          <label className="label">
            <div className="flex rounded my-5 mx-5  ">
              <input
                type="text"
                className="block w-full  px-4 py-2 text-purple-700 bg-white  rounded-md focus:border-purple-400 focus:ring-purple-300 "
                placeholder="Search..."
              />
              <button className="px-4 ml-3 text-white bg-purple-600 border-l rounded ">
                Search
              </button>
            </div>
          </label>
          <select className="select select-primary mx-10  ">
            <option disabled selected>
              Pick one
            </option>
            <option>CSE</option>
            <option>EEE</option>
            <option>English</option>
            <option>Architecture</option>
            <option>Civil</option>
            <option>BBA</option>
          </select>
          <div className="mx-auto">
            <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-xl ">
              Find Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
