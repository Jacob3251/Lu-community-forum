import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "../../firebase.init";
import { BsCameraFill, BsFillCameraFill } from "react-icons/bs";
import Footer from "../Footer/Footer";
import useSingleUser from "../../hooks/useSingleUser";
import cover from "../../images/cover.jpg";
import profilepic from "../../images/profilepic.jpg";
import ProfileInfo from "./ProfileInfo";
import ProfileBio from "./ProfileBio";
import useSingleUserAllPost from "../../hooks/useSingleUserAllPost";
import PostBox from "../PostBox/PostBox";
import { Puff, RotatingSquare } from "react-loader-spinner";
import { FaUpload } from "react-icons/fa";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost";
const Profile = () => {
  const [userArray, setUserArray] = useState([]);
  // const [profile, setProfile] = useState({});
  const [user, loading] = useAuthState(auth);
  const profile = useSingleUser(user?.email);
  const ap = useSingleUserAllPost(user?.email);
  const navigate = useNavigate();
  // Profile Picture File
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [imglinkProfilePic, setimglinkProfilePic] = useState("");
  const [imglingProfilePicUploadStatus, setimglingProfilePicUploadStatus] =
    useState(false);
  const uploadprofilefileInFirebase = () => {
    console.log(profile);
    if (profilePictureFile == null) return;
    console.log("func ran");
    const fileRef = ref(
      storage,
      `profilePictureImages/${
        profile[0]?.email + "===" + profilePictureFile.name + v4()
      }`
    ); //folder in firebase storage for uploded image
    uploadBytes(fileRef, profilePictureFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        alert("img added");
        setimglinkProfilePic(url);
        setimglingProfilePicUploadStatus(true);
      });
    });
  };

  const updateProfileImg = () => {
    const newObj = {
      profileData: profile[0],
      profileImgLink: imglinkProfilePic,
    };
    console.log("newObj profiledata: ", newObj);
    fetch(`http://localhost:9000/profilepic/modify`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // setCommenter(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload();
  };

  // Cover Picture File

  const [coverPictureFile, setCoverPictureFile] = useState(null);
  const [imglinkCoverPic, setimglinkCoverPic] = useState("");
  const [imglingCoverPicUploadStatus, setimglingCoverPicUploadStatus] =
    useState(false);
  const uploadcoverfileInFirebase = () => {
    console.log(profile);
    if (coverPictureFile == null) return;
    console.log("func ran");
    const fileRef = ref(
      storage,
      `coverPictureImages/${
        profile[0]?.email + "===" + coverPictureFile.name + v4()
      }`
    ); //folder in firebase storage for uploded image
    uploadBytes(fileRef, coverPictureFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        alert("img added");
        setimglinkCoverPic(url);
        setimglingCoverPicUploadStatus(true);
      });
    });
  };
  const updateCoverImg = () => {
    const newObj = { profileData: profile[0], coverImgLink: imglinkCoverPic };
    console.log("newObj coverdata: ", newObj);
    fetch(`http://localhost:9000/coverpic/modify`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // setCommenter(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload();
  };
  const handleEnlargeCoverPic = () => {
    let link;
    if (profile[0]?.coverImgLink) {
      link = profile[0]?.coverImgLink;
    } else {
      link = cover;
    }
    navigate(`/profile-cover/coverpic`, {
      state: { link: link },
    });
  };
  const handleEnlargeProfilePic = () => {
    let link;
    if (profile[0]?.profileImgLink) {
      link = profile[0]?.profileImgLink;
    } else {
      link = profilepic;
    }
    navigate(`/profile-cover/profilepic`, {
      state: { link: link },
    });
  };

  // const email = user?.email;
  const footerClass = "w-full";
  // console.log(userArray[1]);
  if (loading && Object.keys(profile).length === 0) {
    <div>Loading</div>;
  }
  if (profile[1] === true) {
    <div>Loading profile Stats</div>;
  }

  return (
    <div className=" w-full pt-16">
      {profile[1] ? (
        <div className="h-[90vh] w-full flex flex-col justify-center items-center">
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#3c2317"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <h3 className="animate-bounce400 font-bold text-lg mt-2">Loading</h3>
        </div>
      ) : (
        <div className="w-full">
          {/* profile box */}
          <div className="">
            {/* cover pic holder */}
            <div className="h-[270px] md:h-[350px] w-full mx-auto relative">
              <img
                onClick={handleEnlargeCoverPic}
                className="w-full h-full object-fill"
                src={profile[0].coverImgLink ? profile[0].coverImgLink : cover}
                alt="cover-img"
              />
              {/* edit cover img button below */}
              <div className=" absolute bottom-[5%] right-[12%]">
                <div className="bg-white p-2 rounded-md text-[14px] inline-block">
                  <label
                    htmlFor="coverpic-modal"
                    className="flex justify-center items-center"
                  >
                    <BsCameraFill className="lg:mr-2"></BsCameraFill>
                    <span className="lg:inline-block hidden">
                      Edit cover pic
                    </span>
                  </label>
                </div>
              </div>
              {/* Info part holder where profile pic resides*/}
              <div className="absolute bottom-[-18%] md:bottom-[-31%] left-[38%]  sm:left-[40%] md:left-[12.5%] ">
                {/* profile image */}
                <div className="flex md:flex-row flex-col justify-center items-center">
                  <div className="h-[140px] w-[140px] p-1 bg-white rounded-full relative">
                    <img
                      onClick={handleEnlargeProfilePic}
                      src={
                        profile[0].profileImgLink
                          ? profile[0].profileImgLink
                          : profilepic
                      }
                      className="w-full h-full rounded-full"
                      alt="profile picture"
                    />

                    <label
                      htmlFor="profilepic-modal"
                      className="bg-white text-black p-1 rounded-full text-3xl absolute bottom-2 right-1"
                    >
                      <BsFillCameraFill></BsFillCameraFill>
                    </label>
                  </div>
                  <div className="ml-5 hidden md:block">
                    <h3 className=" text-2xl font-bold text-black">
                      {profile[0]?.name}
                    </h3>
                    {/* follow button  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[75%]  mx-auto">
            {/* secondary name and follow button container becauser of positoning issue */}
            <div className="text-center md:hidden mt-[90px] w-full ">
              <h3 className=" text-2xl font-bold text-black overflow-x-hidden">
                {profile[0].name}
              </h3>
            </div>
            {/* Main contents of profile section */}
            <div className="mt-[20px] mb-[50px] md:mt-[110px]">
              {profile.length !== 0 ? (
                <div className="flex flex-col-reverse p-2 md:flex-row space-x-0 md:space-x-5">
                  <div className="hidden md:block  md:w-full">
                    <ProfileInfo
                      profile={profile[0]}
                      classes="w-full bg-white p-1 shadow-md shadow-gray-400 hover:drop-shadow-md"
                    ></ProfileInfo>
                  </div>

                  <div className="w-full ">
                    {/* userCreate post */}
                    <CreatePost />
                    <div className="my-5">
                      {ap.postLoading && (
                        <div className="flex justify-center items-center">
                          <RotatingSquare color="#628E90"></RotatingSquare>
                        </div>
                      )}
                      {!ap.postLoading && ap.allSinglePost.length === 0 ? (
                        <div className="flex justify-center items-center">
                          <h3 className="text-3xl font-IndiFlower font-bold my-10 py-8 rounded-md bg-white bg-opacity-60 w-[80%] mx-auto text-center">
                            {" "}
                            No posts yet
                          </h3>
                        </div>
                      ) : (
                        ap.allSinglePost.map((singlePostData) => (
                          <PostBox
                            post={singlePostData}
                            key={singlePostData._id}
                          ></PostBox>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="mb-8 md:mb-0 w-full">
                    <ProfileBio
                      profile={profile[0]}
                      classes="w-full bg-white"
                    ></ProfileBio>
                  </div>
                  <div className="block w-full md:hidden mx-auto ">
                    <ProfileInfo
                      profile={profile[0]}
                      classes="bg-white shadow-md shadow-gray-400 hover:drop-shadow-md w-full pb-5 my-3"
                    ></ProfileInfo>
                  </div>
                </div>
              ) : (
                <div>No Data</div>
              )}
            </div>
            {/* User's own post section */}
          </div>
        </div>
      )}
      {/* Modal for updating profile pic */}
      <input type="checkbox" id="profilepic-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="profilepic-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Upload New Profile Picture</h3>
          <div className="flex flex-col justify-start">
            <input
              type="file"
              onChange={(e) => setProfilePictureFile(e.target.files[0])}
              className=" w-full mt-2"
              // style={{ visibility: "hidden" }}
            />

            <button
              onClick={uploadprofilefileInFirebase}
              disabled={imglingProfilePicUploadStatus ? true : false}
              className={`w-full text-blue-300 rounded-md  bg-slate-100 font-bold hover:bg-slate-200 my-3 text-lg py-3 scale-95 ${
                imglingProfilePicUploadStatus ? "" : "hover:scale-100"
              } duration-200 hover:text-blue-500`}
            >
              {imglingProfilePicUploadStatus ? "Uploaded" : "Upload"}
            </button>
            <button
              onClick={updateProfileImg}
              htmlFor="profilepic-modal"
              className="w-full text-blue-300 rounded-md  bg-slate-100 font-bold hover:bg-slate-200 mb-3 text-lg py-3 scale-95 hover:scale-100 duration-200 hover:text-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* Modal for updating cover pic */}
      <input type="checkbox" id="coverpic-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="coverpic-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Upload New Cover Picture</h3>
          <div className="flex flex-col justify-start">
            <input
              type="file"
              onChange={(e) => setCoverPictureFile(e.target.files[0])}
              className=" w-full mt-2"
              // style={{ visibility: "hidden" }}
            />

            <button
              onClick={uploadcoverfileInFirebase}
              disabled={imglingCoverPicUploadStatus ? true : false}
              className={`w-full text-blue-300 rounded-md  bg-slate-100 font-bold hover:bg-slate-200 my-3 text-lg py-3 scale-95 ${
                imglingCoverPicUploadStatus ? "" : "hover:scale-100"
              } duration-200 hover:text-blue-500`}
            >
              {imglingCoverPicUploadStatus ? "Uploaded" : "Upload"}
            </button>
            <button
              onClick={updateCoverImg}
              htmlFor="coverpic-modal"
              className="w-full text-blue-300 rounded-md  bg-slate-100 font-bold hover:bg-slate-200 mb-3 text-lg py-3 scale-95 hover:scale-100 duration-200 hover:text-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer footerClass={footerClass}></Footer>
    </div>
  );
};

export default Profile;
