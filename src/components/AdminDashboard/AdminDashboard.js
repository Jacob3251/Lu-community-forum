import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
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
    <div className="w-full h-[100vh] overflow-auto">
      {/* body start */}
      <div className="w-[75%] mx-auto mt-20 flex flex-col xl:grid xl:grid-cols-4 xl:gap-2">
        {/* admin left navigation */}

        <div className=" md:col-span-1 sticky top-2 z-30">
          <div className="bg-[#628e90]  px-5 mx-2 py-10 rounded-xl">
            <div className="flex justify-center items-center">
              <h3 className="text-center text-white  font-semibold text-2xl my-5">
                Admin Dashboard
              </h3>
              <button
                className="text-3xl ml-2 text-white animate-bounce400"
                onClick={() => setShowOptions(!showOptions)}
              >
                {!showOptions ? (
                  <FaAngleDoubleDown></FaAngleDoubleDown>
                ) : (
                  <FaAngleDoubleUp></FaAngleDoubleUp>
                )}
              </button>
            </div>
            {showOptions && (
              <div className="grid grid-cols-1 gap-5  md:grid-cols-1 p-5 md:px-5 items-center justify-center ">
                <div
                  className="bg-white flex justify-center items-center rounded-lg py-2 hover:scale-110 duration-200  md:my-2"
                  onClick={() => setContent(0)}
                >
                  <BiArchive className="mr-3 text-lg"></BiArchive>
                  Overview
                </div>
                <div
                  className="bg-white flex justify-center items-center rounded-lg py-2 hover:scale-110 duration-200  md:my-2 "
                  onClick={() => setContent(1)}
                >
                  <FaSchool className="mr-3 text-lg"></FaSchool>
                  University Post
                </div>
                <div
                  className="bg-white flex justify-center items-center rounded-lg py-2 hover:scale-110 duration-200  md:my-2 "
                  onClick={() => setContent(2)}
                >
                  <FaSign className="mr-3 text-lg"></FaSign>
                  Department Post
                </div>
                <div
                  className="bg-white flex justify-center items-center rounded-lg py-2 hover:scale-110 duration-200  md:my-2 "
                  onClick={() => setContent(3)}
                >
                  <FaBus className="mr-3 text-lg"></FaBus>
                  Transport Notice
                </div>
                <div
                  className="bg-white flex justify-center items-center rounded-lg py-2 hover:scale-110 duration-200  md:my-2 "
                  onClick={() => setContent(4)}
                >
                  <FaPencilAlt className="mr-3 text-lg"></FaPencilAlt>
                  My Posts
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Main Bodypart */}
        <div className=" md:col-span-3 ">
          {content === 0 && (
            <div className="w-5/6 p-4 mx-auto bg-[#628e90] my-5">
              {loading ? (
                <div>Loading</div>
              ) : (
                <div className=" ">
                  {/* Here all the stats will be shown */}
                  {/* General Stat Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-5 bg-white  ">
                    {data[1].map((u) => (
                      <h3
                        title={u.tit}
                        key={u.id}
                        className="text-xs my-2 font-bold py-3 px-5 rounded-2xl flex items-center justify-center bg-[#628e90] text-white overflow-hidden"
                      >
                        {u.title}: {u.length}
                      </h3>
                    ))}
                  </div>

                  <div className="bg-slate-100  w-full flex flex-col items-center justify-center">
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
                  <div className="bg-white px-5">
                    <h3 className="text-lg font-sans font-semibold">
                      Total Teacher's:{" "}
                      <span className="font-bold">{data[0].teachers}</span>
                    </h3>
                    <h3 className="text-lg font-sans font-semibold">
                      Total Students:{" "}
                      <span className="font-bold">{data[0].students}</span>
                    </h3>
                  </div>
                </div>
              )}
            </div>
          )}
          {content === 1 && <UniversityPostManager></UniversityPostManager>}
          {content === 2 && <DepartmentPostManager></DepartmentPostManager>}
          {content === 3 && <TransportNoticeManager></TransportNoticeManager>}
          {content === 4 && <TeacherPostManager></TeacherPostManager>}
        </div>

        {/* right bottom chat bodypart */}
        {/* <div className="w-1/5 h-14 rounded-2xl fixed flex justify-center items-center bottom-4 right-2 bg-blue-500 px-10 text-xl font-semibold text-white">
          Context api chat will go here
        </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
