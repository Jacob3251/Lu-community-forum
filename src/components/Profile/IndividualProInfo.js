import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SlPencil } from "react-icons/sl";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const IndividualProInfo = ({ profile, classes }) => {
  const handleUpdateProfile = () => {
    alert("Clicked");
  };
  return (
    <div className={classes}>
      <h3 className="text-center text-black font-bold text-2xl my-5">
        Profile Information
      </h3>
      <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
        <div>Name: {profile.name}</div>
      </div>
      <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
        <div>Department: {profile.dept}</div>
      </div>
      {profile.userType === 2 && (
        <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
          <div>Designation: {profile.designation}</div>
        </div>
      )}
      {profile.userType === 1 ? (
        <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
          <div>Student Id: {profile.studentID}</div>
        </div>
      ) : (
        <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
          <div>Teacher Id: {profile.teacherID}</div>
        </div>
      )}
      <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
        <div>Phone: {profile.phoneNumber}</div>
      </div>
      <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
        <div className="overflow-x-scroll">Email: {profile.email}</div>
      </div>
      <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
        <div>Blood Group: {profile.bloodGroup}</div>
      </div>
      <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
        <div>Address: {profile.address}</div>
      </div>
    </div>
  );
};
// colors used => Bone White	#F9F6EE ===	rgb(249, 246, 238)

export default IndividualProInfo;
