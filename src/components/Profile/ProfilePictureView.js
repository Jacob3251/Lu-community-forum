import React from "react";

import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
const ProfilePictureView = () => {
  const location = useLocation();
  return (
    <div className=" overflow-x-auto">
      <div className="flex flex-col justify-center items-center  w-full">
        <img
          className="w-full object-contain"
          src={location.state.link}
          alt=""
        />
      </div>
      <Footer footerClass="absolute w-full"></Footer>
    </div>
  );
};

export default ProfilePictureView;
