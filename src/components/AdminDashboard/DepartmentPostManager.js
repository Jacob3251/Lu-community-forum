import { type } from "@testing-library/user-event/dist/type";
import moment from "moment";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CiPen, CiTrash } from "react-icons/ci";
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
    alert(id);
    fetch(`http://localhost:9000/selectedpost/deptpost/${id}`, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload();
  };
  return (
    <div className="bg-[#628e90] text-white my-8 p-5 rounded-md ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="bg-white flex py-2 rounded-xl px-2">
          <CiPen className="text-2xl text-[#3c2317] p-1 h-10 w-10 rounded-full hover:bg-green-500 hover:text-white duraiton-300"></CiPen>
          <CiTrash
            onClick={() => handlePostDelete(id)}
            className="text-2xl text-[#3c2317] p-1 h-10 w-10 rounded-full hover:bg-red-500 hover:text-white duraiton-300"
          ></CiTrash>
        </div>
      </div>
      <div className="flex flex-col my-3">
        <b className="text-[#3c2317] text-lg">Type:{type}</b>
        {/* Time will go below here ============================ */}
        <i className="text-xs">Posted at: {time}</i>
      </div>
      <p className="text-xs">
        Published By: <i>{name}</i>
        Published By: <i>{id}</i>
      </p>
      <p className="mb-5">{content}</p>
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
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((data) => {
        const teacherProfile = data[1].find((p) => p.email === email);
        console.log(teacherProfile);
        setProfile(teacherProfile);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:9000/selectedpost/deptpost")
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
      `http://localhost:9000/selectedpost/${
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
    <div className="w-full">
      <h3 className="text-[#3c2317] text-2xl font-bold text-center mb-10 ">
        Department Post Submission Form
      </h3>
      <form onSubmit={handleSubmit} ref={postInput}>
        <input
          type="text"
          className="w-full py-3 my-2 pl-3 rounded-md"
          name="title"
          required
          placeholder="Enter Department Post Title"
        />
        <input
          type="text"
          className="w-full py-3 my-2 pl-3 rounded-md"
          name="content"
          required
          placeholder="Enter Department Post Details"
        />
        <input
          type="text"
          className="w-full py-3 my-2 pl-3 rounded-md"
          name="type"
          required
          placeholder="Enter Post Type"
        />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick your Department</span>
          </label>
          <select className="select">
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
          className="w-full my-2 py-3 bg-[#628e90] hover:bg-[#3c2317] text-white text-lg font-bold scale-95 hover:scale-100 duration-200 rounded-md"
          value="Submit"
        />
      </form>
      {deptNormalPostLoading ? (
        <div>Loading Teacher Posts</div>
      ) : (
        <div className=" my-16">
          <h2 className="text-[#3c2317] text-2xl font-bold text-center mb-10">
            Manage Department Posts
          </h2>
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
  );
};

export default DepartmentPostManager;
