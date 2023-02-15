import { type } from "@testing-library/user-event/dist/type";
import moment from "moment";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import useUniversityPost from "../../hooks/useUniversityPost";
import { CiPen, CiTrash } from "react-icons/ci";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Puff } from "react-loader-spinner";
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
    <div className="bg-white text-[#36454f] mb-8 p-5 shadow-md shadow-gray-500 hover:drop-shadow-md">
      <div className=" ">
        <div className="flex justify-between">
          <div className="flex flex-col my-3 ">
            <b className="text-[#dc4734] text-[14px]">
              Type: <span className="text-[#36454f]">{type}</span>
            </b>
            {/* Time will go below here ============================ */}
            <i className="text-[10px]">Posted at: {time}</i>
          </div>
          <div className="flex py-2 space-x-2">
            <div className="text-[18px] text-[#36454f] rounded-full hover:bg-[#dc4734] hover:text-white duration-200 flex justify-center items-center px-3">
              <FaPencilAlt></FaPencilAlt>
            </div>
            <div className="text-[18px] text-[#36454f] rounded-full hover:bg-[#dc4734] hover:text-white duration-200 flex justify-center items-center px-3">
              <FaTrashAlt onClick={() => handlePostDelete(id)}></FaTrashAlt>
            </div>
          </div>
        </div>
        <h3 className="font-bold text-[14px]">{title}</h3>
      </div>

      <p className="text-[10px] font-bold text-[#36454f] mt-3">
        Published By: <i>{name}</i>
      </p>
      <p className="mb-5 text-[14px]">{content}</p>
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
  //   const [post] = useUniversityPost();
  return (
    <div className="flex flex-col-reverse md:flex-row  items-start pt-5 md:pt-0 md:space-x-5 justify-center ">
      <div className="md:w-full w-[90%] mx-auto mt-5 md:mt-0">
        {teacherNormalPostLoading ? (
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
          <div className="w-full">
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
      </div>
      <div className="w-full px-5 mx-auto">
        <div className="bg-white shadow-md shadow-gray-500 hover:drop-shadow-md">
          <h3 className="text-[#36454f] text-[14px] font-bold text-center mb-5 pt-5">
            Teacher Post Submission Form
          </h3>
          <form onSubmit={handleSubmit} ref={postInput} className="px-2">
            <input
              className="w-full mb-2 py-3 pl-3 shadow-gray-500 shadow-inner"
              type="text"
              name="title"
              placeholder="Enter Post Title"
            />
            <input
              className="w-full my-2 py-3 pl-3 shadow-gray-500 shadow-inner"
              type="text"
              name="content"
              placeholder="Enter Post Details"
            />
            <input
              className="w-full my-2 py-3 pl-3 shadow-gray-500 shadow-inner"
              type="text"
              name="type"
              placeholder="Enter Post Type"
            />
            <input
              className="w-full my-2 py-3 pl-3 shadow-gray-500 shadow-inner"
              type="text"
              name="teacherCode"
              placeholder="Enter Teacher Code"
            />
            <input
              className="w-full my-2 py-3 bg-[#dc4734] hover:bg-white text-white hover:text-[#dc4734] border-2 border-[#dc4734] text-[14px] font-bold  duration-200 "
              type="submit"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>

      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default TeacherPostManager;
