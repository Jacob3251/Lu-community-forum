import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UniversityPostManager from "./UniversityPostManager";
import TeacherPostManager from "./TeacherPostManager";
import DepartmentPostManager from "./DepartmentPostManager";
import TransportNoticeManager from "./TransportNoticeManager";
import { BiArchive } from "react-icons/bi";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaBus,
  FaPencilAlt,
  FaSchool,
  FaSign,
} from "react-icons/fa";
import usePost from "../../hooks/usePost";
import useAllStats from "../../hooks/useAllStats";
import CustomPieChart from "./CustomPieChart";
import { FcBusinessman } from "react-icons/fc";
import { TfiImage } from "react-icons/tfi";
import GalleryPostManager from "./GalleryPostManager";
import Footer from "../Footer/Footer";
import AlumniPostManager from "./AlumniPostManager";
import { Puff } from "react-loader-spinner";
const AdminDashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [posts] = usePost();
  const activePeople = 55;
  const [content, setContent] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  // all stats api call

  const [loading, data] = useAllStats();

  // chats package use below ---

  //   if (/^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(user?.email)) {
  //     return navigate("/home");
  //   }
  return (
    <div className="w-full pt-16">
      {/* body start */}
      <div className="w-full md:w-[95%] lg:w-[80%] mx-auto mt-12 mb-20  grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-9   gap-x-2">
        {/* admin left navigation */}

        <div className=" lg:col-span-2 xl:col-span-2  z-30 ">
          <div className="bg-white  px-5 mx-2 py-2 shadow-none drop-shadow-md hover:shadow-lg shadow-gray-600">
            <div className={`text-center md:text-start md:ml-2`}>
              <h3 className=" text-[#36454f]  font-bold text-[16px] mt-5 drop-shadow-md">
                Admin Dashboard
              </h3>
            </div>
            <div className="flex flex-col space-y-2 py-2 items-center justify-start bg-white">
              <div
                className="w-[95%] hover:bg-[#dc4734] bg-white flex px-2 py-2 text-[#36454f] hover:text-white  font-bold text-[14px] items-center mx-2 duration-200 hover:drop-shadow-md "
                onClick={() => setContent(0)}
              >
                <BiArchive></BiArchive>
                <p className="ml-2">Overview</p>
              </div>
              <div
                className="w-[95%] hover:bg-[#dc4734] bg-white flex px-2 py-2 text-[#36454f] hover:text-white  font-bold text-[14px] items-center mx-2 duration-200 hover:drop-shadow-md "
                onClick={() => setContent(1)}
              >
                <FaSchool></FaSchool>
                <p className="ml-2">University Post</p>
              </div>
              <div
                className="w-[95%] hover:bg-[#dc4734] bg-white flex px-2 py-2 text-[#36454f] hover:text-white  font-bold text-[14px] items-center mx-2 duration-200 hover:drop-shadow-md "
                onClick={() => setContent(2)}
              >
                <FaSign></FaSign>
                <p className="ml-2">Department Post</p>
              </div>
              <div
                className="w-[95%] hover:bg-[#dc4734] bg-white flex px-2 py-2 text-[#36454f] hover:text-white  font-bold text-[14px] items-center mx-2 duration-200 hover:drop-shadow-md "
                onClick={() => setContent(3)}
              >
                <FaBus></FaBus>
                <p className="ml-2">Transport Notice</p>
              </div>
              <div
                className="w-[95%] hover:bg-[#dc4734] bg-white flex px-2 py-2 text-[#36454f] hover:text-white  font-bold text-[14px] items-center mx-2 duration-200 hover:drop-shadow-md "
                onClick={() => setContent(4)}
              >
                <FaPencilAlt></FaPencilAlt>
                <p className="ml-2">My posts</p>
              </div>
              <div
                className="w-[95%] hover:bg-[#dc4734] bg-white flex px-2 py-2 text-[#36454f] hover:text-white  font-bold text-[14px] items-center mx-2 duration-200 hover:drop-shadow-md "
                onClick={() => setContent(5)}
              >
                <FcBusinessman></FcBusinessman>
                <p className="ml-2">Alumni Posts</p>
              </div>
              <div
                className="w-[95%] hover:bg-[#dc4734] bg-white flex px-2 py-2 text-[#36454f] hover:text-white  font-bold text-[14px] items-center mx-2 duration-200 hover:drop-shadow-md "
                onClick={() => setContent(6)}
              >
                <TfiImage></TfiImage>
                <p className="ml-2">Gallery Post</p>
              </div>
            </div>
          </div>
        </div>
        {/* Main Bodypart */}
        <div className="lg:col-span-5 xl:col-span-7   ">
          {content === 0 && (
            <div className="w-full mx-auto bg-white mb-5">
              {loading ? (
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
                <div className="drop-shadow-md shadow-gray-600 p-5">
                  {/* Here all the stats will be shown */}
                  {/* General Stat Information */}
                  <h3 className="text-[14px] font-extrabold ml-2 py-3">
                    Analytics Overview
                  </h3>
                  <div className="flex space-y-3 md:space-y-0 md:space-x-2 flex-col md:flex-row justify-start">
                    <div className="w-[95%] mx-auto md:w-[50%] p-2 text-[14px] ">
                      {data[1].map((u) => (
                        <li
                          title={`${u.title} : ${u.length} `}
                          key={u.id}
                          className="my-1 shadow-inner"
                        >
                          <span className="font-bold text-[#36454f]">
                            {u.title}
                          </span>
                          :{" "}
                          <span className="font-semibold text-black">
                            {u.length}
                          </span>
                        </li>
                      ))}
                    </div>
                    <div className=" w-[95%] mx-auto md:w-[50%]  px-5">
                      <li className="text-[14px] text-[#36454f] font-bold">
                        Total Teacher's:{" "}
                        <span className="font-semibold text-black">
                          {data[0].teachers}
                        </span>
                      </li>
                      <li className="text-[14px]  font-bold text-[#36454f]">
                        Total Students:{" "}
                        <span className="font-semibold text-black">
                          {data[0].students}
                        </span>
                      </li>
                    </div>
                  </div>

                  <div className="bg-[#36454f]  w-full flex flex-col items-center justify-center">
                    <CustomPieChart
                      data={data[1]}
                      colors={[
                        "#F5A623",
                        "#EE4B2B",
                        "#6D4C41",
                        "#00897B",
                        "#FF8F00",
                        "#00E676",
                      ]}
                    ></CustomPieChart>
                  </div>
                </div>
              )}
            </div>
          )}
          {content === 1 && <UniversityPostManager></UniversityPostManager>}
          {content === 2 && <DepartmentPostManager></DepartmentPostManager>}
          {content === 3 && <TransportNoticeManager></TransportNoticeManager>}
          {content === 4 && <TeacherPostManager></TeacherPostManager>}
          {content === 5 && <AlumniPostManager></AlumniPostManager>}
          {content === 6 && <GalleryPostManager></GalleryPostManager>}
        </div>
      </div>
      <Footer footerClass={"w-full"}></Footer>
    </div>
  );
};

export default AdminDashboard;
