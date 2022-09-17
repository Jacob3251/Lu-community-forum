import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import auth from "../../firebase.init";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostBox from "../PostBox/PostBox";
import DashboardLeft from "./DashboardLeft";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import UniversityPostManager from "./UniversityPostManager";
import TeacherPostManager from "./TeacherPostManager";
import DepartmentPostManager from "./DepartmentPostManager";
import TransportNoticeManager from "./TransportNoticeManager";
const AdminDashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const activePeople = 55;
  const [content, setContent] = useState(0);
  //   if (/^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(user?.email)) {
  //     return navigate("/home");
  //   }
  return (
    <div className="">
      {/* Header Start */}
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
              <Link to="/dept">Department</Link>
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
      {/* Header End */}
      {/* body start */}
      <div className="w-full  mx-auto flex ">
        {/* admin left navigation */}
        <div className=" w-1/4 fixed top-[13.4%]">
          <div className="bg-blue-200 px-5 mx-2 py-10 ">
            <h3 className="text-center font-medium text-xl">Admin Dashboard</h3>
            <div className="flex flex-col px-5 items-center justify-center">
              <div className="btn my-6" onClick={() => setContent(0)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
                Overview
              </div>
              <div className="btn my-6 " onClick={() => setContent(1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
                University Post
              </div>
              <div className="btn my-6 " onClick={() => setContent(2)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                Department Post
              </div>
              <div className="btn my-6 " onClick={() => setContent(3)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                Transport Notice
              </div>
              <div className="btn my-6 " onClick={() => setContent(4)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
                My Posts
              </div>
            </div>
          </div>
        </div>
        {/* Main Bodypart */}
        <div className="w-1/2  mx-auto ">
          {content === 0 && (
            <div>
              <div className="w-5/6 p-4 mx-auto bg-blue-300 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                iste. Hic ratione officiis, excepturi sed laboriosam est
                consequatur in at similique, ducimus neque voluptatibus
                voluptas, accusamus optio nulla laudantium rerum. Maxime
                delectus repudiandae nulla veritatis laudantium odit accusantium
                obcaecati, tenetur deserunt ex aspernatur alias unde, error quae
                est. Tempore, voluptate quia quo fugiat expedita vel nemo minima
                exercitationem error id obcaecati aut. Expedita culpa unde
                nesciunt eaque libero quibusdam ipsam, similique accusantium
                facere totam, quo reiciendis ipsa, rem laudantium inventore.
                Dignissimos nulla natus ipsa voluptatem. Molestias in minima
                necessitatibus laboriosam delectus exercitationem, ipsa
                excepturi vel reprehenderit, facere provident nostrum assumenda.
              </div>
              <div className="w-5/6 p-4 mx-auto bg-blue-300 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                iste. Hic ratione officiis, excepturi sed laboriosam est
                consequatur in at similique, ducimus neque voluptatibus
                voluptas, accusamus optio nulla laudantium rerum. Maxime
                delectus repudiandae nulla veritatis laudantium odit accusantium
                obcaecati, tenetur deserunt ex aspernatur alias unde, error quae
                est. Tempore, voluptate quia quo fugiat expedita vel nemo minima
                exercitationem error id obcaecati aut. Expedita culpa unde
                nesciunt eaque libero quibusdam ipsam, similique accusantium
                facere totam, quo reiciendis ipsa, rem laudantium inventore.
                Dignissimos nulla natus ipsa voluptatem. Molestias in minima
                necessitatibus laboriosam delectus exercitationem, ipsa
                excepturi vel reprehenderit, facere provident nostrum assumenda.
              </div>
              <div className="w-5/6 p-4 mx-auto bg-blue-300 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                iste. Hic ratione officiis, excepturi sed laboriosam est
                consequatur in at similique, ducimus neque voluptatibus
                voluptas, accusamus optio nulla laudantium rerum. Maxime
                delectus repudiandae nulla veritatis laudantium odit accusantium
                obcaecati, tenetur deserunt ex aspernatur alias unde, error quae
                est. Tempore, voluptate quia quo fugiat expedita vel nemo minima
                exercitationem error id obcaecati aut. Expedita culpa unde
                nesciunt eaque libero quibusdam ipsam, similique accusantium
                facere totam, quo reiciendis ipsa, rem laudantium inventore.
                Dignissimos nulla natus ipsa voluptatem. Molestias in minima
                necessitatibus laboriosam delectus exercitationem, ipsa
                excepturi vel reprehenderit, facere provident nostrum assumenda.
              </div>
              <div className="w-5/6 p-4 mx-auto bg-blue-300 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                iste. Hic ratione officiis, excepturi sed laboriosam est
                consequatur in at similique, ducimus neque voluptatibus
                voluptas, accusamus optio nulla laudantium rerum. Maxime
                delectus repudiandae nulla veritatis laudantium odit accusantium
                obcaecati, tenetur deserunt ex aspernatur alias unde, error quae
                est. Tempore, voluptate quia quo fugiat expedita vel nemo minima
                exercitationem error id obcaecati aut. Expedita culpa unde
                nesciunt eaque libero quibusdam ipsam, similique accusantium
                facere totam, quo reiciendis ipsa, rem laudantium inventore.
                Dignissimos nulla natus ipsa voluptatem. Molestias in minima
                necessitatibus laboriosam delectus exercitationem, ipsa
                excepturi vel reprehenderit, facere provident nostrum assumenda.
              </div>
              <div className="w-5/6 p-4 mx-auto bg-blue-300 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                iste. Hic ratione officiis, excepturi sed laboriosam est
                consequatur in at similique, ducimus neque voluptatibus
                voluptas, accusamus optio nulla laudantium rerum. Maxime
                delectus repudiandae nulla veritatis laudantium odit accusantium
                obcaecati, tenetur deserunt ex aspernatur alias unde, error quae
                est. Tempore, voluptate quia quo fugiat expedita vel nemo minima
                exercitationem error id obcaecati aut. Expedita culpa unde
                nesciunt eaque libero quibusdam ipsam, similique accusantium
                facere totam, quo reiciendis ipsa, rem laudantium inventore.
                Dignissimos nulla natus ipsa voluptatem. Molestias in minima
                necessitatibus laboriosam delectus exercitationem, ipsa
                excepturi vel reprehenderit, facere provident nostrum assumenda.
              </div>
            </div>
          )}
          {content === 1 && <UniversityPostManager></UniversityPostManager>}
          {content === 2 && <DepartmentPostManager></DepartmentPostManager>}
          {content === 3 && <TransportNoticeManager></TransportNoticeManager>}
          {content === 4 && <TeacherPostManager></TeacherPostManager>}
        </div>
        {/* right bottom chat bodypart */}
        <div className="w-1/5 h-14 rounded-2xl fixed flex justify-center items-center bottom-4 right-2 bg-blue-500 px-10 text-xl font-semibold text-white">
          <div className="flex justify-between items-center  w-full">
            <div className="flex items-center">
              <h3 className="mx-3 ">Chats</h3>
              <FontAwesomeIcon
                icon={faCircle}
                className="h-3 w-3 text-green-600"
              />
            </div>
            <div>
              <h3>(Active {activePeople})</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
