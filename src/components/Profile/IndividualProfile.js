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
import { useParams } from "react-router-dom";
import IndividualProBio from "./IndividualProBio";
import IndividualProInfo from "./IndividualProInfo";

const IndividualProfile = () => {
  const [userArray, setUserArray] = useState([]);
  const [profile, setProfile] = useState([]);
  const [follow, setFollow] = useState(false);
  const mail = useParams();
  console.log("mail from params =>", mail.id);
  console.log(profile);
  const footerClass = " w-full";
  useEffect(() => {
    fetch(`http://localhost:9000/users/${mail.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const prof = [data];
        setProfile(prof);
      });
  }, []);
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
                  {profile.length !== 0 && (
                    <h3 className=" text-2xl font-bold text-black">
                      {profile[0].name}
                    </h3>
                  )}
                  {/* follow button  */}
                  <button
                    onClick={() => setFollow(!follow)}
                    className={`px-3 inline-block py-1 mt-2 font-semibold rounded-md hover:scale-110 duration-200 ${
                      follow
                        ? " bg-[#3c2317] text-white"
                        : "bg-white text-[#3c2317]"
                    }`}
                  >
                    {!follow ? "Follow" : "Followed"}
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
          <h3 className="bg-white px-3 inline-block py-1 mt-2 font-semibold rounded-md hover:bg-[#3c2317] hover:text-white text-[#3c2317]">
            Followers: 443
          </h3>
        </div>
        {/* Main contents of profile section */}
        <div className="mt-[80px] mb-[50px] md:mt-[180px]">
          {profile.length !== 0 ? (
            <div className=" grid grid-cols-1 w-[95%] gap-y-5 md:gap-y-0 md:grid-cols-3 items-baseline gap-x-5 md:w-[80%] mx-auto">
              <IndividualProInfo
                profile={profile[0]}
                classes="bg-white bg-opacity-50 md:col-span-2 p-5 rounded-xl"
              ></IndividualProInfo>
              <IndividualProBio
                profile={profile[0]}
                classes="p-5 bg-[#628e90] bg-opacity-70 rounded-xl"
              ></IndividualProBio>
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
      </div>

      <Footer footerClass={footerClass}></Footer>
    </div>
  );
};

export default IndividualProfile;
