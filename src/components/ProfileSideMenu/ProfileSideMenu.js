import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const ProfileSideMenu = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div class="dropdown dropdown-end">
        {/* <label tabIndex="0" class="btn m-1">
          Click
        </label> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          tabIndex="0"
        >
          <path
            stroklinecap="round"
            stroklinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <ul
          tabIndex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <div className="bg-red-400 h-10 rounded">
            <div className="m-auto p-auto">hello</div>
          </div>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <button
              onClick={() => {
                signOut(auth);
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSideMenu;
