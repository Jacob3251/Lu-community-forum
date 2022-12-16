import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ProfileSideMenu = () => {
  const [user] = useAuthState(auth);

  // if (user) {

  //   console.log("checking the admin: ", checkreg);
  const [admin] = useAdmin();

  return (
    <div className="">
      <div className="dropdown dropdown-end ">
        {/* <label tabIndex="0" className="btn m-1">
          Click
        </label> */}

        <FontAwesomeIcon
          tabIndex="0"
          icon={faUserCircle}
          className="w-8 h-8 text-white mask "
        ></FontAwesomeIcon>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 bg-[#628e90] hover:border-white border-2 shadow-md hover:shadow-gray-700 rounded-md space-y-2 w-52"
        >
          <div className="h-24 mt-5 rounded mx-auto">
            <div className="text-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="w-12 h-12 text-white  hover:text-gray-100"
              ></FontAwesomeIcon>
              <h3>{user?.email}</h3>
            </div>
          </div>
          <li className="hover:text-white bg-white ">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="hover:text-white bg-white ">
            <Link to="/profile">Messages</Link>
          </li>
          {admin === true && (
            <li className="hover:text-white bg-white ">
              <Link to="/admin">Dashboard</Link>
            </li>
          )}
          <li className="hover:text-white bg-white ">
            <Link
              to="/"
              onClick={() => {
                signOut(auth);
              }}
            >
              Logout
              <span>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                ></FontAwesomeIcon>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSideMenu;
