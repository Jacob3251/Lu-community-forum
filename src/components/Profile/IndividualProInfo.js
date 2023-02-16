import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SlPencil } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { auth } from "../../firebase.init";

const IndividualProInfo = ({ profile, classes }) => {
  const handleUpdateProfile = () => {
    alert("Clicked");
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

      {/* update profile modal end ==============================================*/}
    </div>
  );
};
// colors used => Bone White	#F9F6EE ===	rgb(249, 246, 238)

export default IndividualProInfo;
