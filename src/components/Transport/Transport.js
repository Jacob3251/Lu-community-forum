import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import NoticeBox from "./NoticeBox";
import img from "./routine.PNG";
import TransportBox from "./TransportBox";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import { Link } from "react-router-dom";
import NoticeBoxStudent from "./NoticeBoxStudent";
const Transport = () => {
  const R1 = [2, 2, 2, 2];
  const C1 = [100, 100, 100, 100];
  const R2 = [2, 2, 2, 2];
  const C2 = [100, 100, 100, 100];
  const R3 = [2, 2, 2, 2];
  const C3 = [100, 100, 100, 100];
  const R4 = [2, 2, 2, 2];
  const C4 = [100, 100, 100, 100];
  const [notices, setNotices] = useState([]);
  let x = 0;
  useEffect(() => {
    fetch("http://localhost:9000/transportnotice")
      .then((res) => res.json())
      .then((data) => setNotices(data));
  }, [notices]);
  return (
    <div className="w-full mx-auto pt-16">
      <div className="w-5/6 mx-auto">
        <h2 className="text-3xl my-8 text-center  font-bold">
          Today's Transport Schedule
        </h2>
        <div className="divider"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5 z-10">
          <TransportBox Bus={R1} Capacity={C1} Route_name={1}></TransportBox>
          <TransportBox Bus={R2} Capacity={C2} Route_name={2}></TransportBox>
          <TransportBox Bus={R3} Capacity={C3} Route_name={3}></TransportBox>
          <TransportBox Bus={R4} Capacity={C4} Route_name={4}></TransportBox>
        </div>
        <h2 className="text-3xl my-8 text-center font-bold">
          Regular Schedule
        </h2>
        <div className="divider"></div>
        <img src={img} alt="" className="w-4/5 mx-auto" />
        <div className="text-3xl  my-8 text-center font-bold">
          Transport Notices
        </div>{" "}
        <div className="divider"></div>
        <div className="">
          {notices.map((u) => (
            <NoticeBoxStudent
              key={u._id}
              number={++x}
              title={u.title}
              link={u.link}
              id={u._id}
            ></NoticeBoxStudent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transport;
