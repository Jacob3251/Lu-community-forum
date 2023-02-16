import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaPencilAlt } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { auth } from "../../firebase.init";

const ProfileInfo = ({ profile, classes }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");

  const handleUpdateProfile = () => {
    if (profile.userType == 1) {
      const updatedObj = {
        name: name,
        address: address,
        phoneNumber: phoneNumber,
        userType: profile.userType,
        email: profile.email,
      };
      console.log(updatedObj);
      fetch("http://localhost:9000/profileupdate", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
      })
        .then((res) => res.json)
        .then((data) => console.log("success", data));
      window.location.reload();
    } else {
      const updatedObj = {
        name: name,
        address: address,
        phoneNumber: phoneNumber,
        designation: designation,
        userType: profile.userType,
        email: profile.email,
      };
      console.log(updatedObj);
      fetch("http://localhost:9000/profileupdate", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
      })
        .then((res) => res.json)
        .then((data) => console.log("success", data));
      window.location.reload();
    }
  };
  return (
    <div className={classes}>
      <h3 className="text-center text-[#36454F] font-bold text-[14px] pt-5 my-5">
        Profile Information
      </h3>
      <div className="bg-[#f1f1f1] shadow-inner w-[80%] text-[14px] mx-auto py-3 my-4 text-[#36454F] px-5   border-[2px] border-white">
        <div className="text-[14px] text-[#dc4734] font-bold">
          Name:{" "}
          <span className="text-[12px] text-[#36454F]"> {profile.name}</span>
        </div>
      </div>
      <div className="bg-[#f1f1f1] shadow-inner w-[80%] text-[14px] mx-auto py-3 my-4 text-[#36454F] px-5   border-[2px] border-white">
        <div className="text-[14px] text-[#dc4734] font-bold">
          Department:{" "}
          <span className="text-[12px] text-[#36454F]"> {profile.dept}</span>
        </div>
      </div>
      {profile.userType === 2 && (
        <div className="bg-[#f1f1f1] shadow-inner w-[80%] text-[14px] mx-auto py-3 my-4 text-[#36454F] px-5   border-[2px] border-white">
          <div className="text-[14px] text-[#dc4734] font-bold">
            Designation:{" "}
            <span className="text-[12px] text-[#36454F]">
              {profile.designation}
            </span>
          </div>
        </div>
      )}
      {profile.userType === 1 ? (
        <div className="bg-[#f1f1f1] shadow-inner w-[80%] text-[14px] mx-auto py-3 my-4 text-[#36454F] px-5   border-[2px] border-white">
          <div className="text-[14px] text-[#dc4734] font-bold">
            Student Id:{" "}
            <span className="text-[#36454F] text-[12px]">
              {profile.studentID}
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-[#f1f1f1] shadow-inner w-[80%] text-[14px] mx-auto py-3 my-4 text-[#36454F] px-5   border-[2px] border-white">
          <div className="text-[#dc4734] text-[14px] font-bold">
            Teacher Id:{" "}
            <span className="text-[#35454F] text-[12px]">
              {profile.teacherID}
            </span>
          </div>
        </div>
      )}
      <div className="bg-[#f1f1f1] shadow-inner w-[80%] text-[14px] mx-auto py-3 my-4 text-[#36454F] px-5   border-[2px] border-white">
        <div className="text-[#dc4734] text-[14px] font-bold">
          Phone:{" "}
          <span className="text-[#36454F] text-[12px]">
            {profile.phoneNumber}
          </span>
        </div>
      </div>
      <div className="bg-[#f1f1f1] shadow-inner w-[80%] text-[14px] mx-auto py-3 my-4 text-[#36454F] px-5   border-[2px] border-white">
        <div className="overflow-x-scroll text-[14px] text-[#dc4734] font-bold">
          Email:{" "}
          <span className="text-[12px] text-[#36454F]">{profile.email}</span>
        </div>
      </div>
      <div className="bg-[#f1f1f1] shadow-inner w-[80%] text-[14px] mx-auto py-3 my-4 text-[#36454F] px-5   border-[2px] border-white">
        <div className="text-[#dc4734] text-[14px] font-bold">
          Blood Group:{" "}
          <span className="text-[#36454F] text-[12px]">
            {profile.bloodGroup}
          </span>
        </div>
      </div>
      <div className="bg-[#f1f1f1] shadow-inner w-[80%] text-[14px] mx-auto py-3 my-4 text-[#36454F] px-5   border-[2px] border-white">
        <div className="text-[#dc4734] text-[14px] font-bold">
          Address:{" "}
          <span className="text-[#36454F] text-[14px]">{profile.address}</span>
        </div>
      </div>
      <div
        style={{
          cursor: "pointer",
        }}
        className="bg-[#dc4734] hover:bg-[#FFFFF0] w-[80%]  mx-auto py-3 my-4  px-5 font-bold border-0 hover:border-[2px] hover:drop-shadow-md border-white hover:border-[#dc4734] hover:text-[#dc4734]  text-[#FFFFF0] duration-200"
      >
        {/* update profile modal placement */}
        <label
          htmlFor="my-modal-update-profile"
          className=" flex items-center justify-center  w-full "
        >
          <span className="text-[14px]">Update Profile </span>
          <FaPencilAlt className=" ml-3 text-md font-bold"></FaPencilAlt>
        </label>
      </div>

      {/* update profile modal inside start ===================================*/}
      <input
        type="checkbox"
        id="my-modal-update-profile"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-white">
          <div className="relative">
            <h3 className="text-center font-bold text-[#36454F] text-xl mt-5 mb-8">
              Update Profile
            </h3>
            <label
              htmlFor="my-modal-update-profile"
              className="absolute top-0 right-2 hover:bg-red-600 btn font-bold text-white border-none drop-shadow-md btn-circle btn-sm rounded-full"
            >
              X
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name..."
              className="w-full mb-4 bg-white shadow-inner shadow-gray-200  h-[60px] placeholder-gray-500 pl-5 font-semibold"
            />
            {/* checkbox for dept */}
            {/* <select className="select w-full mb-4 bg-white shadow-inner shadow-gray-200  h-[60px] placeholder-gray-500 pl-5 font-semibold outline-none border-none rounded-none ">
              <option value="not" disabled selected>
                Select Department
              </option>
              <option value="cse">CSE</option>
              <option value="eee">EEE</option>
              <option value="ce">CE</option>
              <option value="arch">Arch</option>
            </select> */}
            <input
              type="text"
              name="phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Phone Number..."
              className="w-full  mb-4 bg-white shadow-inner shadow-gray-200  h-[60px] placeholder-gray-500 pl-5 font-semibold"
            />
            {profile.userType === 2 && (
              <select
                className="select w-full rounded-none outline-none"
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option value="not" disabled selected>
                  Select designation
                </option>
                <option value="Professor">Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Asociate Professor">Asociate Professor</option>
                <option value="Senior Lecturer">Senior Lecturer</option>
                <option value="Lecturer">Lecturer</option>
                <option value="Adjunct Faculty">Adjunct Faculty</option>
              </select>
            )}
            <input
              type="text"
              name="address"
              placeholder="Enter Address..."
              onChange={(e) => setAddress(e.target.value)}
              className="w-full  bg-white shadow-inner shadow-gray-200  h-[60px] placeholder-gray-500 pl-5 font-semibold"
            />
          </div>

          <div className="modal-action">
            <label
              htmlFor="my-modal-update-profile"
              className="w-full  flex justify-center items-center text-white hover:text-[#dc4734] hover:border-2 border-[#dc4734]   duration-200 bg-[#dc4734] shadow-md  py-3 placeholder-gray-500 text-[14px] hover:bg-white font-bold hover:translate-y-[-4px] shadow-gray-600"
              onClick={handleUpdateProfile}
            >
              SUBMIT
            </label>
          </div>
        </div>
      </div>
      {/* update profile modal end ==============================================*/}
    </div>
  );
};
// colors used => Bone White	#F9F6EE ===	rgb(249, 246, 238)

export default ProfileInfo;
