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
    <div className="w-full mx-auto">
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
                <label tabindex={0} className="">
                  <Link to="/home">Department</Link>
                </label>
                <ul
                  tabindex={0}
                  className="dropdown-content bg-blue-400 menu p-2 shadow rounded-box w-52"
                >
                  <li>
                    <div
                      className="form-control w-full max-w-xs"
                      onClick={() => setPostType(1)}
                    >
                      University Posts
                    </div>
                  </li>
                  <li>
                    <div
                      className="form-control w-full max-w-xs"
                      onClick={() => setPostType(2)}
                    >
                      Department Posts
                    </div>
                  </li>
                  <li>
                    <div
                      className="form-control w-full max-w-xs"
                      onClick={() => setPostType(3)}
                    >
                      Teacher Posts
                    </div>
                  </li>
                </ul>
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
      {/* teacher button remainining  +++++++++++++++++++++++++++++++++++ */}

      <div className=" my-6 rounded-2xl p-2 w-4/5 mx-auto">
        {postType === 0 && <DeptCarosel className=""></DeptCarosel>}
        {postType === 1 && (
          <div>
            {uniArray.map((u) => (
              // <p>{u.content}</p>
              <div
                className="bg-white shadow-lg rounded-2xl mx-auto my-5  "
                key={++x}
              >
                <div className="w-5/6 mx-auto text-left pb-5">
                  <h2 className="pt-8 pb-4 font-bold text-lg">{u.title}</h2>
                  <div className="">
                    <p className="text-xs">{u.content}</p>
                  </div>
                  <div className=" py-3">
                    <div className="flex justify-between mb-2">
                      <div className="text-gray-700">
                        {" "}
                        20 Likes . 10 dislikes
                      </div>
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
          </div>
        )}
        {postType === 2 && (
          <div>
            <div className="form-control w-full max-w-xs ">
              <select
                onChange={() => setPostType(2)}
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 h-10  hover:bg-blue-200"
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
            {deptArray.map((u) => (
              // <p>{u.content}</p>
              <div
                className="bg-white shadow-lg rounded-2xl mx-auto my-5  "
                key={++x}
              >
                <div className="w-5/6 mx-auto text-left pb-5">
                  <h2 className="pt-8 pb-4 font-bold text-lg">{u.title}</h2>
                  <div className="">
                    <p className="text-xs">{u.content}</p>
                  </div>
                  <div className=" py-3">
                    <div className="flex justify-between mb-2">
                      <div className="text-gray-700">
                        {" "}
                        20 Likes . 10 dislikes
                      </div>
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
          </div>
        )}
        {postType === 3 && (
          <div>
            <div className="">
              <div className="">
                <div className="form-control w-full ">
                  <select
                    onChange={(event) => {
                      setPostType(3);
                      const value = event.target.value;
                      setTeacher(value);

                      console.log(value);
                    }}
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 h-10 hover:bg-gray-200 "
                  >
                    <option value="not">Select teacher</option>
                    <option value="aac">Adil Ahmed Chowdhury</option>
                    <option value="prb">Prithwiraj Bhattacharjee</option>
                  </select>
                </div>
              </div>
            </div>
            {techArray.map((u) => (
              // <p>{u.content}</p>
              <div className="bg-white shadow-lg rounded-2xl mx-auto my-5  ">
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
                      <div className="text-gray-700">
                        {" "}
                        20 Likes . 10 dislikes
                      </div>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Dept;
