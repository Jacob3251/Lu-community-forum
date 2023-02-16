import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
const IndividualProBio = ({ profile, classes, subscribedData }) => {
  return (
    <div>
      <div
        className={`${classes} text-[#26454f] shadow-md shadow-gray-400 hover:drop-shadow-md`}
      >
        <h3 className=" text-center py-3 font-bold text-[14px]">About Me</h3>

        <p className="text-[14px] mb-5 pb-5 w-full pl-5">
          {profile.bio === "" ? "Update your bio" : profile.bio}
        </p>
      </div>
    </div>
  );
};

export default IndividualProBio;
