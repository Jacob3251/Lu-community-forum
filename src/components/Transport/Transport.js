import React from "react";
import Header from "../Header/Header";
import NoticeBox from "./NoticeBox";
import img from "./routine.PNG";
import TransportBox from "./TransportBox";
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
    <div className="w-4/5 mx-auto mt-10">
      <Header></Header>
      <h2 className="text-3xl my-8 text-center font-semibold">
        Today's Transport Schedule
      </h2>
      <div class="divider"></div>
      <div className="grid grid-cols-2 gap-10 bg-slate-100 p-4 my-5">
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
  );
};

export default Transport;
