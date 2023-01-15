import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Header1 from "../Shared/Header/Header";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCameraFill, BsFillCameraFill } from "react-icons/bs";
import {
  faUserCircle,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import useSingleUser from "../../hooks/useSingleUser";
import cover from "../../images/cover.jpg";
import profilepic from "../../images/profilepic.jpg";
import ProfileInfo from "./ProfileInfo";
import ProfileBio from "./ProfileBio";
import useSingleUserAllPost from "../../hooks/useSingleUserAllPost";
import PostBox from "../PostBox/PostBox";
import { RotatingSquare } from "react-loader-spinner";
const Profile = () => {
  const [userArray, setUserArray] = useState([]);
  // const [profile, setProfile] = useState({});
  const [user, loading] = useAuthState(auth);
  const profile = useSingleUser(user?.email);
  const ap = useSingleUserAllPost(user?.email);
  // const email = user?.email;
  const footerClass = " w-full";
  // console.log(userArray[1]);
  if (loading && Object.keys(profile).length === 0) {
    <div>Loading</div>;
  }
  return (
    <div className=" w-full  ">
      <div className="w-full md:w-[75%]  mx-auto">
        {/* profile box */}
        <div className="">
          {/* cover pic holder */}
          <div className="h-[270px] md:h-[350px] w-full mx-auto relative">
            <img className="w-full h-full" src={cover} alt="cover-img" />
            {/* edit cover img button below */}
            <div className=" absolute bottom-[5%] right-[12%]">
              <div className="bg-[#FFFDD0] p-2 rounded-md text-xl inline-block">
                <button className="flex justify-center items-center">
                  <BsCameraFill className="lg:mr-2"></BsCameraFill>
                  <span className="lg:inline-block hidden">Edit cover pic</span>
                </button>
              </div>
            </div>
            {/* Info part holder */}
            <div className="absolute bottom-[-18%] md:bottom-[-42%] left-[31%]  sm:left-[40%] md:left-[10%] ">
              {/* profile image */}
              <div className="flex md:flex-row flex-col justify-center items-center">
                <div className="h-[140px] w-[140px] p-1 bg-white rounded-full relative">
                  <img
                    src={profilepic}
                    className="w-full h-full rounded-full"
                    alt="profile picture"
                  />
                  <button className="bg-white text-black p-1 rounded-full text-3xl absolute bottom-2 right-1">
                    <BsFillCameraFill></BsFillCameraFill>
                  </button>
                </div>
                <div className="ml-5 hidden md:block">
                  <h3 className=" text-2xl font-bold text-black">
                    Md. Nayeem Hasan Adil
                  </h3>
                  {/* follow button  */}
                  <button className="bg-white px-5 py-1 mt-2 font-semibold rounded-md hover:bg-[#3c2317] hover:text-white text-[#3c2317]">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* secondary name and follow button container becauser of positoning issue */}
        <div className="text-center md:hidden mt-[90px] w-full ">
          <h3 className=" text-2xl font-bold text-black overflow-x-hidden">
            Md. Nayeem Hasan Adil
          </h3>
          {/* follow button  */}
          <button className="bg-white px-10 py-1 mt-2 font-semibold rounded-md hover:bg-[#3c2317] hover:text-white text-[#3c2317]">
            Follow
          </button>
        </div>
        {/* Main contents of profile section */}
        <div className="mt-[80px] mb-[50px] md:mt-[180px]">
          {profile.length !== 0 ? (
            <div className=" grid grid-cols-1 w-[95%] gap-y-5 md:gap-y-0 md:grid-cols-3 items-baseline gap-x-5 md:w-[80%] mx-auto">
              <ProfileInfo
                profile={profile[0]}
                classes="bg-white bg-opacity-50 md:col-span-2 p-5 rounded-xl"
              ></ProfileInfo>
              <ProfileBio
                profile={profile[0]}
                classes="p-5 bg-[#628e90] bg-opacity-70 rounded-xl"
              ></ProfileBio>
            </div>
          ) : (
            <div>No Data</div>
          )}
        </div>
        {/* User's own post section */}
        {/* <div className="grid grid-cols-3 gap-5 bg-blue-500">
          <div className="h-[50px] w-[50px] bg-red-500 ">1</div>
          <div className="h-[50px] w-[50px] bg-red-500 ">2</div>
          <div className="h-[50px] w-[50px] bg-red-500 ">3</div>
          <div className="h-[50px] w-[50px] bg-red-500 ">4</div>
          <div className="h-[50px] w-[50px] bg-red-500 ">5</div>
        </div> */}
        <h3 className="text-3xl font-IndiFlower my-10 py-8 rounded-md bg-gray-400 bg-opacity-50 w-[80%] mx-auto text-center">Posts</h3>
        <div>
          
          {
            ap.postLoading && <div className="flex justify-center items-center">
              <RotatingSquare color="#628E90"></RotatingSquare>
            </div>
          }
          {
            !ap.postLoading && ap.allSinglePost.length === 0? <div className="flex justify-center items-center">
            <h3> No posts yet</h3>
          </div>:ap.allSinglePost.map(singlePostData=>  <PostBox post={singlePostData} key={singlePostData._id}></PostBox>)
          }
        </div>
      </div>

      <Footer footerClass={footerClass}></Footer>
    </div>
  );
};

export default Profile;
