import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import DeptCarosel from "../DeptCarosel/DeptCarosel";
import DepartmentPost from "../SelectedPost/DepartmentPost/DepartmentPost";
import UniversityPost from "../SelectedPost/UniversityPost/UniversityPost";
import TeacherPost from "../SelectedPost/TeacherPost/TeacherPost";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
const Dept = () => {
  const [user] = useAuthState(auth);
  const [postType, setPostType] = useState(0);
  const [newPostUniversity, setNewPostUniversity] = useState([]);
  const [newPostDepartment, setNewPostDepartment] = useState([]);
  const [newPostTeacher, setNewPostTeacher] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const uniArray = newPostUniversity[0];
  const deptArray = newPostDepartment[0];
  const techArray = newPostTeacher[0];
  let x = 0;
  useEffect(() => {
    fetch("http://localhost:9000/selectedpost")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0].map((u) => u.newPostUniversity));
        setNewPostUniversity(data[0].map((u) => u.newPostUniversity));
        setNewPostDepartment(data[1].map((u) => u.newPostDepartment));
        setNewPostTeacher(data[2].map((u) => u.newPostTeacher));
      });
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <div className=" rounded-xl sticky top-0 bg-slate-400 z-10 mt-10 ">
        <div className=" flex justify-between items-center px-5 py-2 rounded-lg">
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

          <div className="flex  flex-row  items-center gap-3">
            {/* University posts */}
            <div className="form-control w-full max-w-xs">
              <button
                onClick={() => setPostType(1)}
                className="bg-white rounded-full w-32 h-9 p-1 hover:bg-gray-200 "
              >
                University Posts
              </button>
            </div>
            {/* department posts */}
            <div className="form-control w-full max-w-xs ">
              <select
                onChange={() => setPostType(2)}
                tabIndex="0"
                className="dropdown-content menu p-1 hover:bg-gray-200 shadow bg-base-100 rounded-box w-52 h-9"
              >
                <option value="cse">Department Post</option>
                <option value="cse">Computer Science</option>
                <option value="eee">Electrical Enginnering</option>
                <option value="ce">Civil Enginnering</option>
                <option value="eng">English</option>
                <option value="arch">Architecture</option>
                <option value="bba">Busincess</option>
              </select>
            </div>
            {/* Teacher posts */}

            <div className="form-control w-full max-w-xs">
              <select
                onChange={(event) => {
                  setPostType(3);
                  const value = event.target.value;
                  setTeacher(value);

                  console.log(value);
                }}
                tabIndex="0"
                className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-52 h-9 hover:bg-gray-200 "
              >
                <option value="not">Select teacher</option>
                <option value="aac">Adil Ahmed Chowdhury</option>
                <option value="prb">Prithwiraj Bhattacharjee</option>
              </select>
            </div>

            <div className="navbar-end">
              <ProfileSideMenu></ProfileSideMenu>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 my-6 rounded-2xl p-2">
        {postType === 0 && <DeptCarosel className=""></DeptCarosel>}
        {postType === 1 &&
          uniArray.map((u) => (
            // <p>{u.content}</p>
            <div
              className="bg-slate-300  rounded-2xl mx-auto my-5 shadow-lg shadow-gray-700 "
              key={++x}
            >
              <div className="w-5/6 mx-auto text-left pb-5">
                <h2 className="pt-8 pb-4 font-bold text-lg">{u.title}</h2>
                <div className="">
                  <p className="text-xs">{u.content}</p>
                </div>
                <div className=" py-3">
                  <div className="flex justify-between mb-2">
                    <div className="text-gray-700"> 20 Likes . 10 dislikes</div>
                    <div className="text-gray-700"> 60 comments</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex  ">
                      <button className="btn btn-ghost">
                        <HandThumbUpIcon className="h-6 w-6 mr-2" /> Like
                      </button>
                      <button className="btn btn-ghost">
                        <HandThumbDownIcon className="h-6 w-6 mr-2" /> Dislike
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-ghost">Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // <UniversityPost posts={u} key={++x}></UniversityPost>
          ))}
        {postType === 2 &&
          deptArray.map((u) => (
            // <p>{u.content}</p>
            <div
              className="bg-slate-300  rounded-2xl mx-auto my-5 shadow-lg shadow-gray-700 "
              key={++x}
            >
              <div className="w-5/6 mx-auto text-left pb-5">
                <h2 className="pt-8 pb-4 font-bold text-lg">{u.title}</h2>
                <div className="">
                  <p className="text-xs">{u.content}</p>
                </div>
                <div className=" py-3">
                  <div className="flex justify-between mb-2">
                    <div className="text-gray-700"> 20 Likes . 10 dislikes</div>
                    <div className="text-gray-700"> 60 comments</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex  ">
                      <button className="btn btn-ghost">
                        <HandThumbUpIcon className="h-6 w-6 mr-2" /> Like
                      </button>
                      <button className="btn btn-ghost">
                        <HandThumbDownIcon className="h-6 w-6 mr-2" /> Dislike
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-ghost">Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // <UniversityPost posts={u} key={++x}></UniversityPost>
          ))}
        {postType === 3 &&
          techArray.map((u) => (
            // <p>{u.content}</p>
            <div className="bg-slate-300  rounded-2xl mx-auto my-5 shadow-lg shadow-gray-700">
              {/* top part  */}
              <div className="w-5/6 mx-auto">
                <div className="flex pt-6 pb-4">
                  <div className="">
                    <div className="font-bold text-lg">{u.teacherName}</div>
                  </div>
                </div>
              </div>
              {/* content part */}
              <div className="w-5/6 mx-auto text-left pb-5">
                <h3 className="font-medium text-md">{u.title}</h3>
                <div className="mt-4">
                  <p className="text-xs">{u.content}</p>
                </div>
                <div className=" py-3">
                  <div className="flex justify-between mb-2">
                    <div className="text-gray-700"> 20 Likes . 10 dislikes</div>
                    <div className="text-gray-700"> 60 comments</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex  ">
                      <button className="btn btn-ghost">
                        <HandThumbUpIcon className="h-6 w-6 mr-2" /> Like
                      </button>
                      <button className="btn btn-ghost">
                        <HandThumbDownIcon className="h-6 w-6 mr-2" /> Dislike
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-ghost">Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // <UniversityPost posts={u} key={++x}></UniversityPost>
          ))}

        {/* <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dept;
