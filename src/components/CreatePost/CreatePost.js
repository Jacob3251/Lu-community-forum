import React from "react";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { HiPencilAlt } from "react-icons/hi";
import { BsBackspace } from "react-icons/bs";

import moment from "moment";
import { FaImages } from "react-icons/fa";
import "./CreatePost.css";
import { useEffect } from "react";
const CreatePost = () => {
  const time = moment().format("MMMM Do YYYY, h:mm:ss a");
  const post = useRef();
  const [user] = useAuthState(auth);
  const [showCreatePost, setShowCreatePost] = useState(0);
  const [userdata, setUserdata] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  // this function is for general post upload
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.title.value);
    const title = post.current[0].value;
    const content = post.current[1].value;
    const email = user?.email;
    const likes = [];
    const comments = [];

    const postObject = {
      name: userdata.name,
      time: time,
      title: title,
      content: content,
      email: email,
      likes: likes,
      comments: comments,
    };
    console.log(postObject);

    fetch("http://localhost:9000/generalposts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(postObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setShowCreatePost(0);
        e.target.reset();
      });
  };

  // function for showing selected images in the div before upload
  const showSelectedFiles = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  // function for uploading selected images to firebase and sending the links to mongodb
  const handlePhotoSubmit = (e) => {
    e.preventDefault();
    const img = post.current[1].value;
    console.log(img);
  };
  // alert function if user choosed more than 3 images
  const handleMultiplePicAdd = () => {
    const ImgInputId = document.getElementById("fileImg").disabled;
    if (ImgInputId === true) {
      alert("You can only upload 3 images in Beta");
    }
  };
  useEffect(() => {
    fetch(`http://localhost:9000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserdata(data);
      });
  }, []);

  return (
    <div className=" bg-[#628E90] w-[80%] hover:scale-105 duration-300 p-5 my-10  mx-auto text-center rounded-lg  z-40">
      <div className="flex flex-col md:flex-row space-y-2 md:flex md:space-y-0 items-center justify-start ">
        {/* users profile image link will go here */}
        <div className="flex items-center justify-center space-x-1">
          <div className="w-12 h-12 rounded-full ring ring-transparent ring-offset-base-100 ring-offset-2">
            <img
              className="w-full h-full rounded-full"
              src={
                userdata?.profileImgLink
                  ? userdata?.profileImgLink
                  : "https://stat4.bollywoodhungama.in/wp-content/uploads/2020/08/Emraan-Hashmi.jpeg"
              }
              alt=""
            />
          </div>
          <div className=" ">
            <h3 className="text-white font-bold">
              What's on your mind, {userdata.name} ?
            </h3>
          </div>
        </div>
        <div className="flex space-x-1 ml-1 items-center justify-center">
          <div>
            <button title="Add Post" onClick={() => setShowCreatePost(1)}>
              <HiPencilAlt className="w-8 h-8  text-white hover:scale-110 duration-100 hover:text-[#3C2317]"></HiPencilAlt>
            </button>
          </div>
          <div>
            <button onClick={() => setShowCreatePost(2)}>
              <FaImages className="w-8 h-8  text-white hover:scale-110 duration-100 hover:text-[#3C2317]"></FaImages>
            </button>
          </div>
          {showCreatePost !== 0 && (
            <div>
              <button onClick={() => setShowCreatePost(0)}>
                <BsBackspace className="w-7 h-7 text-white hover:scale-110 duration-100 hover:text-[#3C2317]"></BsBackspace>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* This is for normal post*/}
      {showCreatePost === 1 && (
        <div data-aos="flip-down" className=" bg-[#faf0e6] rounded-md p-4 mt-4">
          <form
            ref={post}
            className="flex flex-col justify-content items-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              required
              name="title"
              type="text"
              placeholder="Enter Title"
              className="bg-[#628E90] placeholder-white text-white rounded-2xl w-full h-10 my-5 pl-4   hover:scale-95 duration-200 shadow-md  outline-white hover:shadow-gray-600 "
            />
            <textarea
              required
              name="content"
              type="text"
              placeholder="Enter Content"
              className="bg-[#628E90] placeholder-white hover:scale-95 duration-200 shadow-md outline-white  hover:shadow-gray-600 text-white rounded-2xl w-full  mb-5 h-20  pl-4  pt-2"
            />
            <button className="w-32  h-10 bg-[#628E90] hover:bg-white shadow-md hover:shadow-gray-600 hover:border-[#628E90] hover:border-2  hover:text-gray-600 text-white font-bold hover:translate-y-[-4px] duration-200">
              <input type="submit" value="Post" />
            </button>
          </form>
        </div>
      )}
      {/* This is for image type post */}
      {showCreatePost === 2 && (
        <div data-aos="flip-down" className=" bg-[#faf0e6] rounded-md p-4 mt-4">
          <form
            ref={post}
            className="flex flex-col justify-content items-center w-full "
            onSubmit={handlePhotoSubmit}
          >
            <input
              required
              name="title"
              type="text"
              placeholder="Enter Title"
              className="bg-[#628E90] placeholder-white text-white rounded-2xl w-full h-10 my-5 pl-4   hover:scale-95 duration-200 shadow-md  outline-white hover:shadow-gray-600 "
            />
            <label
              htmlFor="fileImg"
              onClick={handleMultiplePicAdd}
              className={
                selectedImages.length > 2
                  ? "bg-red-500 px-5 py-2 rounded-md text-white font-bold hover:bg-white hover:text-red-500 border-2 border-red-500 mb-2"
                  : "bg-green-400 px-5 py-2 rounded-md text-white font-bold hover:bg-white hover:text-green-500 border-2 border-green-500 mb-2"
              }
            >
              {selectedImages.length > 2 ? "Can't Upload More" : "Add Images"}
            </label>
            <input
              required
              className="w-0 h-0"
              type="file"
              name="file"
              id="fileImg"
              disabled={selectedImages.length > 2 ? true : false}
              multiple
              accept="image/png, image/jpeg, image/webp"
              onChange={showSelectedFiles}
            />
            {selectedImages && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-5">
                {selectedImages.map((image, index) => {
                  return (
                    <div className="bg-[#e7d3bf] rounded-lg" key={image}>
                      <div className="relative  h-[50px] w-[120px] my-5 mx-2 rounded-md">
                        <img src={image} className="h-[50px] w-[120px]" />
                        <button
                          onClick={() =>
                            setSelectedImages(
                              selectedImages.filter((e) => e !== image)
                            )
                          }
                          className="absolute top-[-14px] right-1 hover:text-white hover:bg-red-500 font-extrabold rounded-full h-[24px] w-[24px] flex justify-center items-center bg-gray-200"
                        >
                          x
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            <button className="w-32  h-10 bg-[#628E90] hover:bg-white shadow-md hover:shadow-gray-600 hover:border-[#628E90] hover:border-2  hover:text-gray-600 text-white font-bold hover:translate-y-[-4px] duration-200">
              <input type="submit" value="Post" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
