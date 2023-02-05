import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
// import useAdmin from "../../hooks/useAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useAsyncError } from "react-router-dom";
import RequireAdmin from "../RequireAdmin/RequireAdmin";
import { FaUserAlt } from "react-icons/fa";

const ProfileSideMenu = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);

  const email = user?.email;
  useEffect(() => {
    const checkreg = /^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(email);
    console.log("writing");
    if (!checkreg) {
      // setAdmin(true);
      setAdmin(!admin);
      // console.log("from use Admin, admin after: ", admin);
    }
  }, []);
  // if (user) {

  //   console.log("checking the admin: ", checkreg);
  // const [admin] = useAdmin(user?.email);
  // const admin = FindAdmin(user?.email);
  return (
    <div className="">
      <div className="dropdown dropdown-end">
        {/* <label tabIndex="0" className="btn m-1">
          Click
        </label> */}

        <FaUserAlt
          tabIndex="0"
          icon={faUserCircle}
          className="text-lg text-black hover:text-[#dc4734] mask "
        ></FaUserAlt>
        <ul
          tabIndex="0"
          className="dropdown-content p-2 z-50 bg-[#628e90] hover:border-white border-2 shadow-md hover:shadow-gray-700 rounded-md space-y-2 w-52"
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
          <li className="hover:text-white bg-white ">
            <Link to="/dept">Official Posts</Link>
          </li>
          <li className="hover:text-white bg-white ">
            <Link to="/transport">Transport Posts</Link>
          </li>
          <li className="hover:text-white bg-white ">
            <Link to="/library">Search Library</Link>
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
              <span className="ml-2">
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
