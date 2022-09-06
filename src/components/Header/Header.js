import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";

const Header = () => {
  const [profileBtn, setProfileBtm] = useState(false);
  return (
    <div className="">
      <div className="navbar bg-slate-400 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200 rounded-box w-52"
            >
              <li>
                <Link to="/home">Homepage</Link>
              </li>
              <li>
                <Link to="/dept">Dept</Link>
              </li>
              <li>
                <Link to="/transport">Transport</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center ">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Lu Community Forum
          </Link>
        </div>
        <div className="navbar-end">
          <ProfileSideMenu></ProfileSideMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
