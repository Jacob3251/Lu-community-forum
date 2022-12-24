import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FaStream } from "react-icons/fa";
import "./Header.css";
import auth from "../../../firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import ProfileSideMenu from "../../ProfileSideMenu/ProfileSideMenu";
import Login from "../../Login/Login";
const Header = () => {
  const [user] = useAuthState(auth);
  // const [signOut, loading, error] = useSignOut(auth);
  const activeDesign = "text-[#3c2317] text-underline scale-125 header-text";
  const [activeSide, setActiveSide] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-[#628e90]">
      <div className="main-header flex justify-between   items-center px-[8.5%] py-2 rounded-sm hover:shadow-lg hover:shadow-[#3c2317] duration-150">
        {/* secondary menu name  */}
        <div className="sideMenuIcon">
          <h1 className=" text-red-500">LUCM</h1>
        </div>
        {/* Left header logo below */}
        <div className="hover:text-[#3c2317] ">
          <h1 className="company-name">Leading University</h1>
        </div>
        {/* Website Name */}

        {/* Menu here below */}
        <div className="menuBar   ">
          <ul className="flex space-x-3 justify-end items-center">
            <li className="header-text">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="header-text">
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text text-[#F5EFE6]"
                }
              >
                Service
              </NavLink>
            </li>
            <li className="header-text">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text text-[#F5EFE6]"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className="header-text">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? activeDesign : "header-text text-[#F5EFE6]"
                }
              >
                About
              </NavLink>
            </li>
            {user && (
              <li className="header-text">
                <div
                  className={({ isActive }) =>
                    isActive ? activeDesign : "header-text text-[#F5EFE6]"
                  }
                >
                  <ProfileSideMenu></ProfileSideMenu>
                </div>
              </li>
            )}
            {!user && (
              <li className="header-text">
                <div className="text-[#F5EFE6]">
                  <label htmlFor="my-modal-3" className="modal-button">
                    Login
                  </label>
                </div>
              </li>
            )}

            {/* {!user && (
              <li className="header-text">
                <NavLink
                  to="register"
                  className={({ isActive }) =>
                    isActive ? activeDesign : "header-text text-[#F5EFE6]"
                  }
                >
                  SignUp
                </NavLink>
              </li>
            )} */}
            {/* {user && (
              <li className="header-text">
                <button
                  className="header-text text-[#F5EFE6]"
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
            )} */}
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
