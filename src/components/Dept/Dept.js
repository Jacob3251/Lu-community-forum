import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

const SpecificUniversityPost = ({ title, content, email, type }) => {
  return (
    <div className="bg-white my-5">
      <h3>{title}</h3>
      <h6>
        <i>Type:{type}</i>
      </h6>
      <p>{content}</p>
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
    <div className="w-full h-[100vh] overflow-scroll mx-auto">
      {/* Toggle Buttons Below */}
      <div className="block md:inline-block  md:ml-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4 place-content-center place-items-center">
          <div
            onClick={() => setPostType(1)}
            className="py-3 px-2 bg-[#628e90] hover:bg-[#3c2317] text-lg text-white font-bold hover:text-white hover:scale-105 duration-200 rounded-md"
          >
            University
          </div>
          <div
            onClick={() => setPostType(2)}
            className="py-3 px-2 bg-[#628e90] hover:bg-[#3c2317] text-lg text-white font-bold hover:text-white hover:scale-105 duration-200 rounded-md"
          >
            Department
          </div>
          <div
            onClick={() => setPostType(3)}
            className="py-3 px-2 bg-[#628e90] hover:bg-[#3c2317] text-lg text-white font-bold hover:text-white hover:scale-105 duration-200 rounded-md"
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
                content={u.content}
                email={u.email}
                type={u.type}
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
                <option value="ce">Civil Enginnering</option>
                <option value="eng">English</option>
                <option value="arch">Architecture</option>
                <option value="bba">Busincess</option>
              </select>
            </div>
            {newPostDepartment.map((u) => (
              // <p>{u.content}</p>
              <div
                className="bg-white shadow-lg rounded-2xl mx-auto my-5  "
                key={u._id}
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
              <div
                className="bg-white shadow-lg rounded-2xl mx-auto my-5  "
                key={u._id}
              >
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
