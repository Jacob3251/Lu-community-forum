import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ProfileSideMenu = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <div className="dropdown dropdown-end ">
        {/* <label tabIndex="0" className="btn m-1">
          Click
        </label> */}

        <FontAwesomeIcon
          tabIndex="0"
          icon={faUserCircle}
          className="w-8 h-8 text-white mask hover:text-gray-500 "
        ></FontAwesomeIcon>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 bg-slate-200 shadow rounded-box w-52"
        >
          <div className="h-24 rounded mx-auto">
            <div className="text-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="w-12 h-12 text-gray-400  hover:text-gray-500 "
              ></FontAwesomeIcon>
              <h3>{user?.email}</h3>
            </div>
          </div>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
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
