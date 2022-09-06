import React from "react";
import Header from "../Header/Header";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import { Link } from "react-router-dom";
const Library = () => {
  return (
    <div className=" w-full mx-auto ">
      <div className="sticky top-0 z-10">
        {/* <Header></Header> */}
        <div className="w-full bg-blue-500 flex justify-between items-center py-3 px-5">
          {/* header left side */}
          <div className="flex items-center">
            {/* <div>
              <img src={logo} alt="Varsity logo" className="w-10 h-10" />
            </div> */}
            <div className="text-lg text-white font-semibold ml-2">
              LU Community Forum
            </div>
          </div>
          {/* header Links right side */}
          <div className="flex space-x-2 items-center">
            <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
              <Link to="/home">Homepage</Link>
            </div>
            <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
              <div className="dropdown dropdown-hover">
                <Link to="/dept">Department</Link>
              </div>
            </div>
            <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
              <Link to="/library">Library</Link>
            </div>
            <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
              <Link to="/transport">Transport</Link>
            </div>
            <div className="text-base text-white font-medium  font-serif p-1 rounded-lg">
              <ProfileSideMenu></ProfileSideMenu>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 my-10  mx-auto bg-slate-200 py-10 rounded-xl shadow-lg ">
        <div className="text-center">
          <div>
            <h1 className=" w-5/6 mx-auto text-2xl font-bold  rounded-md py-2">
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
          {/* <div className="mx-auto">
            <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-xl ">
              Find Book
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Library;
