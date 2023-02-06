import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FaSearch, FaStream, FaUserAlt } from "react-icons/fa";
import "./Header.css";
import { auth } from "../../../firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import ProfileSideMenu from "../../ProfileSideMenu/ProfileSideMenu";
import Login from "../../Login/Login";
import { useEffect } from "react";
import { checkTargetForNewValues } from "framer-motion";
import { useRef } from "react";
import {
  faArrowRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DemoSideMenu from "../../ProfileSideMenu/DemoSideMenu";
const Header = () => {
  const [user] = useAuthState(auth);
  // const [signOut, loading, error] = useSignOut(auth);
  const activeDesign = "text-[#dc4734] text-xl scale-125 header-text";
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activeSide, setActiveSide] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [showSearchSubmit, setShowSearchSubmit] = useState(false);
  const [allUsersProfile, setAllUsersProfile] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const searchRef = useRef("");
  useEffect(() => {
    fetch("http://localhost:9000/user")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
    allUsers.map((u) => {
      fetch(`http://localhost:9000/users/${u.email}`)
        .then((res) => res.json())
        .then((output) => setAllUsersProfile((prev) => [...prev, output]));
    });
  }, [allUsers.length]);
  const handleNav = () => {
    if (user?.email === searchedUsers[0].email) {
      navigate("/profile");
      setSearchedUsers([]);
    } else {
      navigate(`/userprofile/${searchedUsers[0].email}`);
      setSearchedUsers([]);
    }
  };
  const handleSearchUser = (e) => {
    e.preventDefault();
    const searchValue = e.target.searchName.value;

    const found = allUsersProfile.filter(
      (u) =>
        u.name.toUpperCase() === searchValue.toUpperCase() ||
        u.email === searchValue
    );
    if (found) {
      setSearchedUsers(found);
      e.target.reset();
    }
    console.log(found);
    setShowSearchSubmit(!showSearchSubmit);
    // if(allUsersProfile.length !== 0){

    // }
  };
  const handleSearchUserbtn = () => {
    const searchValue = searchRef.current.value;

    const found = allUsersProfile.filter(
      (u) =>
        u.name.toUpperCase() === searchValue.toUpperCase() ||
        u.email === searchValue
    );
    if (found) {
      setSearchedUsers(found);
    }
    console.log(found);
    setShowSearchSubmit(!showSearchSubmit);
    // if(allUsersProfile.length !== 0){

    // }
  };
  const navigate = useNavigate();
  return (
    <div className="bg-white drop-shadow-lg w-full absolute z-50">
      <div className="main-header w-full md:w-[75%] mx-auto flex justify-evenly md:justify-between items-center py-2 rounded-sm duration-150">
        {/* secondary menu name  */}
        <div className="sideMenuIcon">
          <h1 className="font-bold text-[18px] my-2 text-[#dc4734]">LUCM</h1>
        </div>
        {/* Left header logo below */}
        <div className="">
          <h1 className="company-name">Leading University</h1>
        </div>
        {/* Search users */}
        {user?.emailVerified && (
          <div className="shadow-inner rounded-full px-3">
            <form
              onSubmit={handleSearchUser}
              className="flex flex-row justify-center space-x-2 items-center my-2"
            >
              <input
                type="text"
                name="searchName"
                ref={searchRef}
                className=" pl-2  rounded-md  py-1 outline-none"
                placeholder="Search by name or email"
              />
              <FaSearch
                onClick={handleSearchUserbtn}
                className="text-[333333] text-2xl font-normal   hover:text-[#dc4734]  rounded-md"
              >
                {/* <input type="submit" value="search" className="" /> */}
              </FaSearch>
            </form>
            {/* showing users */}
            {searchedUsers.length !== 0 && (
              <div
                className="bg-white hover:bg-[#FFFFF0] pl-2 w-full shadow-inner"
                onClick={handleNav}
              >
                {searchedUsers[0].name}
              </div>
            )}
          </div>
        )}

        {/* Menu here below */}
        <div className="menuBar   ">
          <ul className="flex space-x-3 justify-end items-center">
            <li className="header-text text-lg font-bold">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text text-[#333333]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="header-text text-lg font-bold">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text text-[#333333] "
                }
              >
                Gallery
              </NavLink>
            </li>

            {user?.emailVerified && (
              <li className="header-text text-lg font-bold">
                <NavLink
                  to="dept"
                  className={({ isActive }) =>
                    isActive ? activeDesign : "header-text text-[#333333] "
                  }
                >
                  Official Posts
                </NavLink>
              </li>
            )}
            <li className="header-text text-lg font-bold">
              <NavLink
                to="alumni"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text text-[#333333] "
                }
              >
                Alumni
              </NavLink>
            </li>
            {/* ProfileSide menu below================================================================== */}
            {user && (
              <li className="header-text text-lg  font-bold ">
                <div
                  className={({ isActive }) =>
                    isActive ? `${activeDesign}` : "header-text text-[#333333] "
                  }
                >
                  <ProfileSideMenu></ProfileSideMenu>
                </div>
              </li>
            )}
            {!user && (
              <li className="header-text text-lg font-bold">
                <div className="text-[#F5EFE6]">
                  <label htmlFor="my-modal-3" className="modal-button">
                    Login
                  </label>
                </div>
              </li>
            )}
          </ul>
        </div>
        <button
          className="sideMenuIcon"
          onClick={() => setActiveSide(!activeSide)}
        >
          <FaStream />
        </button>
      </div>
      {/* sidemenu mini */}
      <div className={`text-center my-2 ${activeSide ? "block" : "hidden"}`}>
        <ul className="space-y-2">
          <li>
            <NavLink
              onClick={() => {
                setActiveSide(!activeSide);
              }}
              to="/home"
              className={({ isActive }) =>
                isActive ? activeDesign : "header-text"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setActiveSide(!activeSide);
              }}
              to="/service"
              className={({ isActive }) =>
                isActive ? activeDesign : "header-text"
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setActiveSide(!activeSide);
              }}
              to="blogs"
              className={({ isActive }) =>
                isActive ? activeDesign : "header-text"
              }
            >
              Blogs
            </NavLink>
          </li>
          {!user && (
            <li className="header-text">
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text"
                }
              >
                login
              </NavLink>
            </li>
          )}
          {!user && (
            <li className="header-text">
              <NavLink
                to="register"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text"
                }
              >
                SignUp
              </NavLink>
            </li>
          )}
          {user && (
            <li className="header-text">
              <button
                className="header-text"
                onClick={() => {
                  signOut(auth);
                  toast("You're logged out", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                }}
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </div>
      {/* login modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      {!user && (
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-5 top-2"
            >
              ✕
            </label>
            <div className=" pl-8">
              <Login></Login>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Header;
