import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

const SpecificUniversityPost = ({
  title,
  name,
  content,
  email,
  type,
  time,
}) => {
  return (
    <div className="bg-[#628e90] text-white my-8 p-5 rounded-md ">
      <h3 className="font-bold text-2xl">{title}</h3>
      <div className="flex flex-col my-3">
        <b className="text-[#3c2317] text-lg">Type:{type}</b>
        {/* Time will go below here ============================ */}
        <i className="text-xs">Published at: {time}</i>
      </div>
      <p>
        Published by: <i>{name}</i>
      </p>
      <p className="mb-5">{content}</p>
    </div>
  );
};
const SpecificDepartmentPost = ({
  id,
  title,
  name,
  dept,
  content,
  email,
  time,
  type,
}) => {
  return (
    <div className="bg-[#628e90] text-white my-8 p-5 rounded-md ">
      <h3 className="font-bold text-2xl">{title}</h3>
      <div className="flex flex-col my-3">
        <b className="text-[#3c2317] text-lg">Type: {type}</b>
        {/* Time will go below here ============================ */}
        <i className="text-xs">Published at: {time}</i>
      </div>
      <p className="text-xs">
        Published By: <i>{name}</i>
      </p>
      <p className="mb-5">{content}</p>
    </div>
  );
};
const SpecificTeacherPost = ({
  title,
  name,
  id,
  dept,
  content,
  email,
  time,
  type,
}) => {
  return (
    <div className="bg-[#628e90] text-white my-8 p-5 rounded-md ">
      <h3 className="font-bold text-2xl">{title}</h3>
      <div className="flex flex-col my-3">
        <b className="text-[#3c2317] text-lg">Type:{type}</b>
        {/* Time will go below here ============================ */}
        <i className="text-xs">Posted at: {time}</i>
      </div>
      <p className="text-xs">
        Published By: <i>{name}</i>
      </p>
      <p className="mb-5">{content}</p>
    </div>
  );
};

const Dept = () => {
  const [user] = useAuthState(auth);
  const [postType, setPostType] = useState(1);
  const [newPostUniversity, setNewPostUniversity] = useState([]);
  const [newPostDepartment, setNewPostDepartment] = useState([]);
  const [newPostTeacher, setNewPostTeacher] = useState([]);
  const [teacher, setTeacher] = useState([]);
  // const uniArray = newPostUniversity[0];
  // const deptArray = newPostDepartment[0];
  // const techArray = newPostTeacher[0];

  useEffect(() => {
    fetch("http://localhost:9000/selectedpost")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(data[0].map((u) => u.newPostUniversity));
        setNewPostUniversity(data[0]);
        setNewPostDepartment(data[1]);
        setNewPostTeacher(data[2]);
      });
  }, [newPostUniversity, newPostDepartment, newPostTeacher]);

  return (
    <div className="w-full  mx-auto">
      {/* Toggle Buttons Below */}
      <div className="block md:inline-block  md:ml-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4 place-content-center place-items-center">
          <div
            onClick={() => setPostType(1)}
            className={`py-3 px-2 ${
              postType === 1
                ? "bg-[#3c2317] hover:bg-[#628e90]"
                : "bg-[#628e90] hover:bg-[#3c2317]"
            }   text-lg text-white font-bold hover:text-white hover:scale-105 duration-200 rounded-md`}
          >
            University
          </div>
          <div
            onClick={() => setPostType(2)}
            className={`py-3 px-2 ${
              postType === 2
                ? "bg-[#3c2317] hover:bg-[#628e90]"
                : "bg-[#628e90] hover:bg-[#3c2317]"
            }  text-lg text-white font-bold hover:text-white hover:scale-105 duration-200 rounded-md`}
          >
            Department
          </div>
          <div
            onClick={() => setPostType(3)}
            className={`py-3 px-2 ${
              postType === 3
                ? "bg-[#3c2317] hover:bg-[#628e90]"
                : "bg-[#628e90] hover:bg-[#3c2317]"
            }  text-lg text-white font-bold hover:text-white hover:scale-105 duration-200 rounded-md`}
          >
            Teacher
          </div>
        </div>
      </div>

      <div className=" my-6 rounded-2xl p-2 w-4/5 mx-auto">
        {postType === 1 && (
          <div>
            {newPostUniversity.reverse().map((u) => (
              // <p>{u.content}</p>
              <SpecificUniversityPost
                key={u._id}
                title={u.title}
                name={u.name ? u.name : null}
                content={u.content}
                email={u.email}
                type={u.type}
                time={u.time ? u.time : null}
              ></SpecificUniversityPost>
              // <UniversityPost posts={u} key={++x}></UniversityPost>
            ))}
          </div>
        )}
        {postType === 2 && (
          <div>
            <div className="form-control w-full max-w-xs ">
              <select
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 h-10  hover:bg-blue-200"
              >
                <option value="cse">Department Post</option>
                <option value="cse">Computer Science</option>
                <option value="eee">Electrical Enginnering</option>
                {/* <option value="ce">Civil Enginnering</option>
                <option value="eng">English</option>
                <option value="arch">Architecture</option>
                <option value="bba">Busincess</option> */}
              </select>
            </div>
            {newPostDepartment.map((u) => (
              // <p>{u.content}</p>
              <SpecificDepartmentPost
                key={u._id}
                title={u.title}
                name={u.name}
                dept={u.dept}
                content={u.content}
                email={u.email}
                type={u.type}
                id={u._id}
                time={u.time ? u.time : null}
              ></SpecificDepartmentPost>
              // <UniversityPost posts={u} key={++x}></UniversityPost>
            ))}
          </div>
        )}
        {postType === 3 && (
          <div>
            <div className="form-control w-full ">
              <select
                onChange={(event) => {
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

            {newPostTeacher.map((u) => (
              // <p>{u.content}</p>
              <SpecificTeacherPost
                key={u._id}
                name={u.name}
                title={u.title}
                id={u._id}
                dept={u.dept}
                content={u.content}
                email={u.email}
                type={u.type}
                time={u.time ? u.time : null}
              ></SpecificTeacherPost>
              // <UniversityPost posts={u} key={++x}></UniversityPost>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dept;
