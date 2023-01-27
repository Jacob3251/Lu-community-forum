import { type } from "@testing-library/user-event/dist/type";
import moment from "moment";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import useUniversityPost from "../../hooks/useUniversityPost";
import { CiPen, CiTrash } from "react-icons/ci";
const TeacherPostBox = ({
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
    fetch(`http://localhost:9000/selectedpost/teacherpost/${id}`, {
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

const TeacherPostManager = () => {
  const postInput = useRef();
  const [user] = useAuthState(auth);
  const time = moment().format("MMMM Do YYYY, h:mm:ss a");
  const email = user?.email;
  const [profile, setProfile] = useState({});
  const [normalPosts, setNormalPosts] = useState([]);
  const [teacherNormalPostLoading, setTeacherNormalPostLoading] =
    useState(true);
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
    fetch("http://localhost:9000/selectedpost/teacherpost")
      .then((res) => res.json())
      .then((data) => {
        setNormalPosts(data);
        setTeacherNormalPostLoading(false);
      });
  }, [normalPosts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = postInput.current[0].value;
    const content = postInput.current[1].value;
    const type = postInput.current[2].value;
    const teacherCode = postInput.current[3].value;
    const postObject = {
      title: title,
      name: profile.name,
      dept: profile.dept,
      content: content,
      email: email,
      type: type,
      teacherCode: teacherCode,
      time: time,
      postType: 2,
    };
    fetch("http://localhost:9000/selectedpost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(postObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
      });
  };
  //   const [post] = useUniversityPost();
  return (
    <div>
      <h3 className="text-[#3c2317] text-2xl font-bold text-center mb-10 ">
        Teacher Post Submission Form
      </h3>
      <form onSubmit={handleSubmit} ref={postInput}>
        <input
          className="w-full my-2 py-3 pl-3 rounded-md"
          type="text"
          name="title"
          placeholder="Enter Post Title"
        />
        <input
          className="w-full my-2 py-3 pl-3 rounded-md"
          type="text"
          name="content"
          placeholder="Enter Post Details"
        />
        <input
          className="w-full my-2 py-3 pl-3 rounded-md"
          type="text"
          name="type"
          placeholder="Enter Post Type"
        />
        <input
          className="w-full my-2 py-3 pl-3 rounded-md"
          type="text"
          name="teacherCode"
          placeholder="Enter Teacher Code"
        />
        <input
          className="w-full my-2 py-3 bg-[#628e90] hover:bg-[#3c2317] text-white text-lg font-bold scale-95 hover:scale-100 duration-200 rounded-md"
          type="submit"
          value="Submit"
        />
      </form>
      {teacherNormalPostLoading ? (
        <div>Loading Teacher Posts</div>
      ) : (
        <div className="">
          {normalPosts.map((post) => (
            <TeacherPostBox
              name={post.name}
              title={post.title}
              id={post._id}
              dept={post.dept}
              content={post.content}
              email={post.email}
              type={post.type}
              time={post.time ? post.time : null}
            >
              {}
            </TeacherPostBox>
          ))}
        </div>
      )}
      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default TeacherPostManager;
