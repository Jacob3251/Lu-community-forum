import { type } from "@testing-library/user-event/dist/type";
import moment from "moment";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CiPen, CiTrash } from "react-icons/ci";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Puff } from "react-loader-spinner";
import { auth } from "../../firebase.init";
import useUniversityPost from "../../hooks/useUniversityPost";
const DepartmentPostBox = ({
  title,
  name,
  id,
  dept,
  content,
  email,
  time,
  type,
}) => {
  const handlePostDelete = (id) => {
    const data = { stat: null };
    fetch(
      `https://lu-community-forum-backend.up.railway.app/selectedpost/deptpost/${id}`,
      {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="bg-white text-[#36454f] mb-5 px-3 py-2 shadow-md hover:drop-shadow-lg shadow-gray-500">
      <div className="flex justify-between">
        <div className="flex flex-col my-3">
          <b className="text-[#dc4734] text-[14px] font-bold">
            Type: <span className="text-[#36454f]">{type}</span>
          </b>
          {/* Time will go below here ============================ */}
          <i className="text-[10px]">Posted at: {time}</i>
        </div>
        <div className="bg-white flex py-2 rounded-xl px-2">
          {/* <div className="flex justify-center items-center text-[#36454f]   h-8 w-8 p-1 rounded-full hover:border-[#dc4734] border-2 border-white font-bold hover:text-[#dc4734] duraiton-200">
            <FaPencilAlt></FaPencilAlt>
          </div> */}
          <div className="flex justify-center items-center text-[#36454f]   h-8 w-8 p-1 rounded-full hover:border-[#dc4734] border-2 border-white font-bold hover:text-[#dc4734] duraiton-200">
            <FaTrashAlt onClick={() => handlePostDelete(id)}></FaTrashAlt>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-[14px]">{title}</h3>
      </div>

      <p className="text-[10px] mt-1">
        Published By: <i>{name}</i>
      </p>
      <p className="mb-5 text-[14px]">{content}</p>
    </div>
  );
};
const DepartmentPostManager = () => {
  const postInput = useRef();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [profile, setProfile] = useState({});

  const [normalPosts, setNormalPosts] = useState([]);
  const [deptNormalPostLoading, setDeptNormalPostLoading] = useState(true);
  useEffect(() => {
    fetch("https://lu-community-forum-backend.up.railway.app/users")
      .then((res) => res.json())
      .then((data) => {
        const teacherProfile = data[1].find((p) => p.email === email);
        console.log(teacherProfile);
        setProfile(teacherProfile);
      });
  }, []);
  useEffect(() => {
    fetch(
      "https://lu-community-forum-backend.up.railway.app/selectedpost/deptpost"
    )
      .then((res) => res.json())
      .then((data) => {
        setNormalPosts(data);
        setDeptNormalPostLoading(false);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = postInput.current[0].value;
    const content = postInput.current[1].value;
    const type = postInput.current[2].value;
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");

    const postObject = {
      title: title,
      name: profile.name,
      dept: postInput.current[3].value,
      content: content,
      email: email,
      type: type,
      time: time,
      postType: 1,
    };
    console.log();
    fetch(
      `https://lu-community-forum-backend.up.railway.app/selectedpost/${
        user?.email + "***" + profile[0]?.userType
      }`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(postObject),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
      });
  };
  return (
    <div className="w-full flex flex-col md:p-0 p-2 space-y-3 md:space-y-0 md:flex-row-reverse justify-center md:justify-evenly items-start mt-5 lg:mt-0">
      <div className=" bg-white w-full md:ml-5 shadow-md shadow-gray-500 hover:drop-shadow-md">
        <h3 className="text-[#36454f] text-[14px] font-bold text-center my-2 ">
          Department Post Form
        </h3>
        <form onSubmit={handleSubmit} ref={postInput} className="p-2">
          <input
            type="text"
            className="w-full py-1 mb-2 pl-1 placeholder:text-[12px] italic outline-none shadow-inner shadow-gray-300"
            name="title"
            required
            placeholder="Enter Department Post Title"
          />
          <input
            type="text"
            className="w-full py-1 my-2 pl-1 placeholder:text-[12px] italic outline-none shadow-inner shadow-gray-300"
            name="content"
            required
            placeholder="Enter Department Post Details"
          />
          <input
            type="text"
            className="w-full py-1 my-2 pl-1 placeholder:text-[12px] italic outline-none shadow-inner shadow-gray-300"
            name="type"
            required
            placeholder="Enter Post Type"
          />
          <div className="form-control w-full max-w-xs outline-none rounded-none">
            <label className="label ">
              <span className="label-text text-[12px]">
                Pick your Department
              </span>
            </label>
            <select className="select outline-none text-[12px]">
              <option value="not">Select Department</option>
              <option value="cse">Computer Science</option>
              <option value="eee">Electrical Engineering</option>
              <option value="ce">Civil Engineering</option>
              <option value="ee">English</option>
              <option value="arch">Architecture</option>
              <option value="bba">Business Administration</option>
            </select>
          </div>
          <input
            type="submit"
            className="w-full my-2 py-3 bg-[#dc4734] border-2 border-[#dc4734] hover:bg-white text-white hover:text-[#dc4734] text-[14px] font-bold duration-200"
            value="Submit"
          />
        </form>
      </div>
      <div className="">
        {deptNormalPostLoading ? (
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
            <h3 className="animate-bounce400 font-bold text-lg mt-2">
              Loading
            </h3>
          </div>
        ) : (
          <div className=" mb-16">
            {normalPosts.map((post) => (
              <DepartmentPostBox
                name={post.name}
                title={post.title}
                id={post._id}
                dept={post.dept}
                content={post.content}
                email={post.email}
                type={post.type}
                time={post.time ? post.time : null}
              ></DepartmentPostBox>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentPostManager;
