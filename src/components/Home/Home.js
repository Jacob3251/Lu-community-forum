import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

import PostBox from "../PostBox/PostBox";
import Loader from "../Loader/Loader";
import { HashLink } from "react-router-hash-link";
import CreatePost from "../CreatePost/CreatePost";
import { Link } from "react-router-dom";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import usePost from "../../hooks/usePost";
import Header from "../Shared/Header/Header";
const Home = () => {
  const [user] = useAuthState(auth);
  const [posts] = usePost([]);
  const reversed = [...posts].reverse();
  const footerClass = "bg-red-200 relative bottom-0 w-full";
  return (
    <div className=" lg:w-full h-[80%] overflow-scroll mx-auto ">
      {/* <Header></Header> */}
      {/* <Header></Header> */}
      {/* body part */}
      <div className="w-5/6 mx-auto">
        <CreatePost></CreatePost>

        {posts.length === 0 ? (
          <h3>No posts yet</h3>
        ) : (
          reversed.map((u) => (
            <PostBox
              title={u.title}
              content={u.content}
              postId={u._id}
              key={u._id}
              email={u.email}
            ></PostBox>
          ))
        )}
      </div>

      <Footer footerClass={footerClass}></Footer>
    </div>
  );
};

export default Home;
//  <div className="sticky top-0 z-10">
//    <div className="w-full bg-blue-500 flex justify-between items-center py-3 px-5">
//      {/* header left side */}
//      <div className="flex items-center">
//        {/* <div>
//               <img src={logo} alt="Varsity logo" className="w-10 h-10" />
//             </div> */}
//        <div className="text-lg text-white font-semibold ml-2">
//          LU Community Forum
//        </div>
//      </div>
//      {/* header Links right side */}
//      <div className="flex space-x-2 items-center">
//        <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
//          <Link to="/home">Homepage</Link>
//        </div>
//        <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
//          <Link to="/dept">Department</Link>
//        </div>
//        <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
//          <Link to="/library">Library</Link>
//        </div>
//        <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
//          <Link to="/transport">Transport</Link>
//        </div>
//        <div className="text-base text-white font-medium  font-serif p-1 rounded-lg">
//          <ProfileSideMenu></ProfileSideMenu>
//        </div>
//      </div>
//    </div>
//  </div>;
