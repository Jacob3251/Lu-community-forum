import React from "react";
import { SlPencil } from "react-icons/sl";

const ProfileInfo = ({ profile, classes }) => {
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
      {profile.userType === 2  && <div className="bg-[#F9F6EE] w-[80%] bg-opacity-50 mx-auto py-5 my-4 rounded-md px-5 font-bold text-gray-600 border-[2px] hover:drop-shadow-md border-white">
        <div>Designation: {profile.designation}</div>
      </div>}
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
      <div className="bg-[#00755E] hover:bg-[#FFFFF0] w-[80%]  mx-auto py-5 my-4 rounded-md px-5 font-bold border-0 hover:border-[2px] hover:drop-shadow-md border-white hover:border-[#628e90] hover:text-black text-[#FFFFF0] duration-75">
        {/* update profile modal placement */}
        <label
          htmlFor="my-modal"
          className=" flex items-center justify-center  w-full text-lg"
        >
          <span className="">Update Profile </span>
          <SlPencil className=" ml-3"></SlPencil>
        </label>
      </div>

      {/* update profile modal inside start ===================================*/}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-[#628e90]">
          <div className="relative">
            <h3 className="text-center font-bold text-white text-2xl mt-5 mb-8">
              Update Profile
            </h3>
            <label
              htmlFor="my-modal"
              className="absolute top-0 right-2 btn btn-circle btn-md"
            >
              X
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name..."
              className="w-full p-2 mb-4 bg-[#FAF9F6] rounded-xl h-[60px] placeholder-gray-500 pl-5 font-semibold"
            />
            {/* checkbox for dept */}
            <select className="select w-full p-2 mb-4 bg-[#FAF9F6] rounded-xl h-[60px] placeholder-gray-500 pl-5 font-semibold">
              <option value="not" disabled selected>
                Select Department
              </option>
              <option value="cse">CSE</option>
              <option value="eee">EEE</option>
              <option value="ce">CE</option>
              <option value="arch">Arch</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number..."
              className="w-full p-2 mb-4 bg-[#FAF9F6] rounded-xl h-[60px] placeholder-gray-500 pl-5 font-semibold"
            />

            <input
              type="text"
              name="address"
              placeholder="Enter Address..."
              className="w-full p-2 bg-[#FAF9F6] rounded-xl h-[60px] placeholder-gray-500 pl-5 font-semibold"
            />
          </div>

          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="w-full  flex justify-center items-center text-white  hover:bg-[#50C878] duration-150 bg-[#097969] rounded-xl h-[60px] placeholder-gray-500 text-xl font-bold"
              onClick={handleUpdateProfile}
            >
              Submit
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
