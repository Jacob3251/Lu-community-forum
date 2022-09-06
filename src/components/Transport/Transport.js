import React from "react";
import Header from "../Header/Header";
import NoticeBox from "./NoticeBox";
import img from "./routine.PNG";
import TransportBox from "./TransportBox";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import { Link } from "react-router-dom";
const Transport = () => {
  const R1 = [2, 2, 2, 2];
  const C1 = [100, 100, 100, 100];
  const R2 = [2, 2, 2, 2];
  const C2 = [100, 100, 100, 100];
  const R3 = [2, 2, 2, 2];
  const C3 = [100, 100, 100, 100];
  const R4 = [2, 2, 2, 2];
  const C4 = [100, 100, 100, 100];
  return (
    <div className="w-full mx-auto ">
      <div className="sticky top-0 z-20">
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
              <div className="dropdown dropdown-hover">
                <Link to="/dept">Department</Link>
              </div>
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
      <div className="w-5/6 mx-auto">
        <h2 className="text-3xl my-8 text-center font-semibold">
          Today's Transport Schedule
        </h2>
        <div class="divider"></div>
        <div className="grid grid-cols-2 gap-10 bg-slate-100 p-4 my-5 z-10">
          <TransportBox Bus={R1} Capacity={C1} Route_name={1}></TransportBox>
          <TransportBox Bus={R2} Capacity={C2} Route_name={2}></TransportBox>
          <TransportBox Bus={R3} Capacity={C3} Route_name={3}></TransportBox>
          <TransportBox Bus={R4} Capacity={C4} Route_name={4}></TransportBox>
        </div>
        <h2 className="text-3xl my-8 text-center font-semibold">
          Regular Schedule
        </h2>
        <div class="divider"></div>
        <img src={img} alt="" className="w-4/5 mx-auto" />
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-10"
        >
          <div className="collapse-title text-2xl font-medium">
            Transport Notices
          </div>
          <div className="collapse-content">
            <NoticeBox></NoticeBox>
            <NoticeBox></NoticeBox>
            <NoticeBox></NoticeBox>
            <NoticeBox></NoticeBox>
            <NoticeBox></NoticeBox>
            <NoticeBox></NoticeBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
