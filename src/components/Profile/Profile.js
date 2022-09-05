import React from "react";
import { Link } from "react-router-dom";
import PostBox from "../PostBox/PostBox";

const Profile = () => {
  return (
    <div className=" w-4/5 mx-auto py-10">
      <h1 className="bg-yellow-400">Profile Route</h1>
      <div className="sticky top-0 bg-red-500 z-10 ">
        <div className="bg-green-400 flex justify-between items-center px-5 py-2 rounded-lg">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200 rounded-box w-52"
            >
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/dept">Dept</Link>
              </li>
              <li>
                <Link to="/transport">Transport</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
            </ul>
          </div>
          <div className="flex  flex-row-reverse bg-yellow-400">
            <div className="dropdown dropdown-hover">
              <label tabIndex="0" className="btn m-1">
                Button
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <label tabIndex="0" className="btn m-1">
                Button
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <label tabIndex="0" className="btn m-1">
                Button
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PostBox className="z-0"></PostBox>
      <PostBox className="z-0"></PostBox>
      <PostBox className="z-0"></PostBox>
      <PostBox className="z-0"></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
    </div>
  );
};

export default Profile;
