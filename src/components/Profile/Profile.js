import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Header1 from "../Shared/Header/Header";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
const Profile = () => {
  const [userArray, setUserArray] = useState([]);
  const [profile, setProfile] = useState({});
  const [user] = useAuthState(auth);
  const email = user?.email;
  // console.log(userArray[1]);
  const emailreg = /^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(email);

  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((data) => {
        if (emailreg) {
          const studentProfile = data[0].find((p) => p.email === email);
          console.log(studentProfile);
          setProfile(studentProfile);
        } else {
          const teacherProfile = data[1].find((p) => p.email === email);
          console.log(teacherProfile);
          setProfile(teacherProfile);
        }
      });
  }, []);
  return (
    <div className=" w-full">
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
      <Header1></Header1>
      <div className="w-5/6 mx-auto">
        <div className=" bg-blue-200 my-5 rounded-lg flex ">
          <div className=" w-full relative">
            <div className="h-4/5  w-4/5 mx-auto p-10">
              <div>
                <p className="text-center text-2xl lg:text-3xl font-medium my-10">
                  Profile
                </p>
                <form className="flex flex-col items-center justify-center">
                  <input
                    className="w-72 md:w-96 h-12 bg-white rounded pl-4 text-stone-800 focus:outline-none mb-3"
                    type="text"
                    value={
                      profile.userType === 1
                        ? `Student Name: ${profile.name}` || "Student Name"
                        : `Teacher Name: ${profile.name}` || "Name"
                    }
                    name="name"
                  />
                  <input
                    className="w-72 md:w-96 h-12 bg-white rounded pl-4 text-stone-800 focus:outline-none mb-3"
                    type="text"
                    value={
                      profile.userType === 1
                        ? `Student ID: ${profile.studentID}` || "Studnet ID"
                        : `Teacher ID: ${profile.teacherID}` || "Teacher ID"
                    }
                  />
                  <input
                    className="w-72 md:w-96 h-12 bg-white rounded pl-4 text-stone-800 focus:outline-none mb-3"
                    type="text"
                    name="dept"
                    value={`Department: ${profile.dept}` || "Department"}
                  />
                  <input
                    className="w-72 md:w-96 h-12 bg-white rounded pl-4 text-stone-800 focus:outline-none mb-3"
                    type="email"
                    value={`Email: ${profile.email}` || "Email"}
                    name="email"
                  />
                  <input
                    className="w-72 md:w-96 h-12 bg-white rounded pl-4 text-stone-800 focus:outline-none mb-3"
                    type="text"
                    value={`Phone: ${profile.phoneNumber}` || "Phone"}
                    name="phone"
                  />
                  {profile.userType === 1 && (
                    <input
                      className="w-72 md:w-96 h-12 bg-white rounded pl-4 text-stone-800 focus:outline-none mb-3"
                      type="text"
                      value={
                        `Batch Number: ${profile.batchNumber}` || "Batch Number"
                      }
                      name="batch"
                    />
                  )}
                  <input
                    className="w-72 md:w-96 h-12 bg-white rounded pl-4 text-stone-800 focus:outline-none mb-3"
                    type="text"
                    value={`Address: ${profile.address}` || "Address"}
                    name="address"
                  />
                  <input
                    className="w-72 md:w-96 h-12 bg-white rounded pl-4 text-stone-800 focus:outline-none mb-3"
                    type="text"
                    value={`BloodGroup: ${profile.bloodGroup} ` || "BloodGroup"}
                    name="bldgrp"
                  />
                </form>
              </div>
            </div>
            <PencilSquareIcon className="h-10 w-10 text-blue-500 bottom-10 right-12 absolute hover:bg-slate-100 p-[3px] bg-slate-300 rounded-xl" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
