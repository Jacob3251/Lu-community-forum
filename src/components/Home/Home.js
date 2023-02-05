import React from "react";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { HashLink } from "react-router-hash-link";
import PostBox from "../PostBox/PostBox";
import Loader from "../Loader/Loader";
import CreatePost from "../CreatePost/CreatePost";
import { Link } from "react-router-dom";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import usePost from "../../hooks/usePost";
import Header from "../Shared/Header/Header";
import ImageBox from "../ImageBox/ImageBox";
import { CgArrowUpO } from "react-icons/cg";
const Home = () => {
  const [user] = useAuthState(auth);
  const [posts] = usePost([]);

  const reversed = [...posts].reverse();
  const footerClass = "bg-red-200 relative bottom-0 w-full";
  const links = [
    "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1616766098956-c81f12114571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1541112324160-e8a425b58dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ];
  const links2 = [
    "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1541112324160-e8a425b58dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ];
  const links1 = [
    "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <div className=" lg:w-full h-[80%]  mx-auto ">
      {/* <Header></Header> */}
      {/* <Header></Header> */}
      {/* body part */}
      <div className="w-full md:w-[75%] mx-auto relative" id="top">
        <div className="grid grid-cols-1  xl:grid-cols-9  gap-x-5 px-5 place-content-between  xl:pt-10  ">
          <div className="col-span-6 xl:col-span-3  ">
            <CreatePost></CreatePost>
          </div>
          <div className="col-span-6  xl:col-span-5 ">
            {posts.length === 0 ? (
              <div className="flex justify-center items-center h-[57vh]">
                <h3>No posts yet</h3>
              </div>
            ) : (
              reversed.map((singlePostData) => (
                <PostBox
                  post={singlePostData}
                  key={singlePostData._id}
                ></PostBox>
              ))
            )}
          </div>
        </div>
        {/* <ImageBox links={links1}></ImageBox>
        <ImageBox links={links2}></ImageBox>
        <ImageBox links={links}></ImageBox> */}
        <HashLink smooth to="/#top" className="">
          <CgArrowUpO
            className={`fixed shadow-md animate-bounce400 shadow-white bottom-[5%] right-[8%] md:right-[48%] h-[50px] hover:text-[#628E90] hover:bg-white hover:scale-125  bg-[#628E90] text-white rounded-full text-[50px]`}
          ></CgArrowUpO>
        </HashLink>
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
