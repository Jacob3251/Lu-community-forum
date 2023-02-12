import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import useSingleUser from "../../hooks/useSingleUser";
import Footer from "../Footer/Footer";
import { Puff } from "react-loader-spinner";

const SpecificUniversityPost = ({
  title,
  name,
  content,
  email,
  type,
  time,
}) => {
  return (
    <div className="bg-white text-[#36454F] my-8 px-5 pt-2 pb-3 drop-shadow-md hover:drop-shadow-lg">
      <div className="flex flex-col my-3">
        <span className="text-[#36454F] font-semibold text-[14px]">
          Type: <span className="text-[#dc4734] font-bold">{type}</span>
        </span>
        {/* Time will go below here ============================ */}
        <i className="text-[10px]">Published at: {time}</i>
      </div>
      <p className="text-[12px] font-bold my-2">
        Published by: <i className="text-[#dc4734] italic">{name}</i>
      </p>
      <h3 className="font-bold text-[14px] mt-2">{title}</h3>
      <p className="mb-5 text-[14px] ">{content}</p>
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
    <div className="bg-white my-8 px-5 pt-2 pb-3 drop-shadow-md hover:drop-shadow-lg">
      <div className="flex flex-col my-3">
        <span className="text-[#36454F] font-semibold text-[14px]">
          Type:
          <span className="text-[#dc4734] font-bold"> {type}</span>
        </span>
        {/* Time will go below here ============================ */}
        <i className="text-[10px]">Published at: {time}</i>
      </div>
      <span className="text-[12px] font-bold text-[#36454F] my-2">
        Published By: <i className="text-[#dc4734]">{name}</i>
      </span>
      <h3 className="font-bold text-[14px] text-[#36454F] mt-2">{title}</h3>
      <p className="mb-5 text-[14px]">{content}</p>
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
    <div className="bg-white drop-shadow-md my-8 px-5 pt-2 pb-3 hover:drop-shadow-lg">
      <div className="flex flex-col my-3">
        <span className="text-[#36454F] font-semibold text-[14px]">
          Type:
          <span className=" text-[#dc4734] font-bold"> {type}</span>
        </span>
        {/* Time will go below here ============================ */}
        <i className="text-[10px]">Posted at: {time}</i>
      </div>
      <p className="text-[12px] font-bold text-[#36454F]">
        Published By: <i className="text-[#dc4734]">{name}</i>
      </p>
      <h3 className="font-bold text-[14px] text-[#36454F] mt-2">{title}</h3>
      <p className="mb-5 text-[14px]">{content}</p>
    </div>
  );
};

const Dept = () => {
  const [user] = useAuthState(auth);
  const profile = useSingleUser(user?.email);
  const [postType, setPostType] = useState(1);
  const [newPostUniversity, setNewPostUniversity] = useState([]);
  const [newPostDepartment, setNewPostDepartment] = useState([]);
  const [newPostTeacher, setNewPostTeacher] = useState([]);
  // const [teacher, setTeacher] = useState([]);
  const [teacherPostToggler, setTeacherPostToggler] = useState(0);
  const [dataLoader, setDataLoader] = useState(true);
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
        setDataLoader(false);
      });
  }, [newPostUniversity, newPostDepartment, newPostTeacher]);

  return (
    <>
      {dataLoader ? (
        <div className="h-[90vh] w-full flex flex-col justify-center items-center">
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#3c2317"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="w-full pt-28">
          {/* Toggle Buttons Below */}
          <div className="w-full md:w-[80%] md:mx-auto">
            <div className="p-5 my-0 flex flex-col space-y-2 md:space-y-0 w-5/6 mx-auto md:w-full text-center   md:flex-row md:space-x-3 ">
              <button
                onClick={() => setPostType(1)}
                className={`py-3 px-2 drop-shadow-md hover:drop-shadow-lg duration-200 ${
                  postType === 1
                    ? "bg-white text-[#dc4734] text-lg "
                    : "bg-white text-[#36454F] text-lg"
                }    font-bold duration-200`}
              >
                University
              </button>
              <button
                onClick={() => setPostType(2)}
                className={`py-3 px-2 drop-shadow-md hover:drop-shadow-lg duration-200 ${
                  postType === 2
                    ? "bg-white text-[#dc4734] text-lg "
                    : "bg-white text-[#36454F] text-lg"
                }    font-bold duration-200`}
              >
                Department
              </button>
              <button
                onClick={() => setPostType(3)}
                className={`py-3 px-2 drop-shadow-md hover:drop-shadow-lg duration-200 ${
                  postType === 3
                    ? "bg-white text-[#dc4734] text-lg "
                    : "bg-white text-[#36454F] text-lg"
                }    font-bold duration-200`}
              >
                Teacher
              </button>
            </div>
          </div>

          <div className="mt-0  mb-6 rounded-2xl  w-4/5 mx-auto">
            {postType === 1 && (
              <div>
                {newPostUniversity.map((u) => (
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

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[80%] mx-auto">
              {teacher.length !== 0 &&
                teacher?.subscribed.map((u) => (
                  <div
                    key={u?.id}
                    className="flex flex-col w-[80%] mx-auto rounded-lg justify-center items-center bg-white scale-90 hover:scale-100 duration-200"
                  >
                    <img
                      src={u?.photoURL}
                      className="w-[80%] h-[60%] mx-auto"
                      alt={u?.name}
                    />
                    <h3 className="text-center text-base md:text-lg font-bold my-2">
                      {u?.name}
                    </h3>
                    <p className="text-center text-base mb-2 md:text-md font-semibold">
                      {u?.designation}
                    </p>
                  </div>
                ))}
            </div> */}
                {/* <button
              onClick={() => {
                console.log(teacher);
              }}
            >
              press me
            </button> */}

                {/* {teacherPostToggler === 1 && (
              <div>
                <h3 className="mt-[150px] bg-white py-2 rounded-md text-lg md:text-2xl text-center font-bold">
                  Subscribed Teacher's Posts
                </h3>
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
            )} */}
              </div>
            )}
          </div>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Dept;
