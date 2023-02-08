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
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import RequireAdmin from "../RequireAdmin/RequireAdmin";
import { FaUserAlt } from "react-icons/fa";
import useSingleUser from "../../hooks/useSingleUser";

const ProfileSideMenu = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  const profile = useSingleUser(user?.email);
  const email = user?.email;
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/profile");
  };
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
    <div className="dropdown dropdown-end ">
      {profile[0]?.profileImgLink ? (
        <div className="avatar online" tabIndex="0">
          <div className="w-8 rounded-full">
            <img src={profile[0]?.profileImgLink} />
          </div>
        </div>
      ) : (
        <FaUserAlt
          tabIndex="0"
          icon={faUserCircle}
          className="text-lg text-black hover:text-[#dc4734] mask "
        ></FaUserAlt>
      )}

      <ul
        tabIndex="0"
        className="dropdown-content p-2 bg-[#f1f1f1]   border-2 shadow-inner mt-3   space-y-2 w-52"
      >
        <div className="h-24 mt-5 rounded mx-auto">
          <div
            className="flex flex-col justify-center items-center"
            onClick={handleNav}
          >
            <img
              className="rounded-full w-12 h-12"
              src={profile[0]?.profileImgLink}
              alt=""
            />
            <h3 className="hover:underline hover:text-[#dc4734] text-md hover:text-lg mt-2 hover:font-bold duration-200">
              {profile[0]?.name}
            </h3>
          </div>
        </div>
        <li className="hover:text-white bg-white hover:bg-[#dc4734] duration-200">
          <Link to="/profile">Profile</Link>
        </li>

        <li className="hover:text-white bg-white hover:bg-[#dc4734] duration-200">
          <Link to="/transport">Transport Posts</Link>
        </li>

        {admin === true && (
          <li className="hover:text-white hover:bg-[#dc4734] bg-white  duration-200">
            <Link to="/admin">Dashboard</Link>
          </li>
        )}

        <li className="hover:text-white hover:bg-[#dc4734] bg-white  duration-200">
          <Link
            to="/"
            onClick={() => {
              signOut(auth);
            }}
          >
            Logout
            <span className="ml-2">
              <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSideMenu;
