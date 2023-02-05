import React from "react";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "../../firebase.init";
import { HiPencilAlt } from "react-icons/hi";
import { BsBackspace } from "react-icons/bs";

import moment from "moment";
import { FaImages, FaSearch } from "react-icons/fa";
import "./CreatePost.css";
import { useEffect } from "react";
import { CgLayoutGrid } from "react-icons/cg";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const CreatePost = () => {
  const time = moment().format("MMMM Do YYYY, h:mm:ss a");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const post = useRef();
  const [user] = useAuthState(auth);
  const [showCreatePost, setShowCreatePost] = useState(0);
  const [userdata, setUserdata] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImageInput, setSelectedImageInput] = useState([]);
  const [imglinkPost, setimglinkPost] = useState([]);

  // function for showing selected images in the div before upload
  const showSelectedFiles = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setSelectedImageInput((prev) => [...prev, selectedFiles]);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  // function for uploading selected images to firebase and sending the links to mongodb
  const handlePhotoSubmit = () => {
    console.log(imglinkPost);
    if (selectedImageInput.length === 0) return;
    console.log(
      "create post image add to firebase func ran",
      selectedImageInput
    );
    for (let i = 0; i < selectedImageInput[0].length; i++) {
      const fileRef = ref(
        storage,
        `generalPostPictures/${selectedImageInput[0][i].name + v4()}`
      ); //folder in firebase storage for uploded image
      uploadBytes(fileRef, selectedImageInput[0][i]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setimglinkPost((prev) => [...prev, url]);
          console.log(imglinkPost);
        });
      });
    }
    alert("img added");
  };
  // alert function if user choosed more than 3 images
  const handleMultiplePicAdd = () => {
    const ImgInputId = document.getElementById("fileImg").disabled;
    if (ImgInputId === true) {
      alert("You can only upload 3 images in Beta");
    }
  };
  // this function is for general post upload
  const handleSubmit = () => {
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
      imglinkPost: imglinkPost.length !== 0 ? imglinkPost : "",
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
        setTitle("");
        setContent("");
        setSelectedImages([]);
        setSelectedImageInput([]);
        setimglinkPost([]);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:9000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserdata(data);
      });
  }, []);

  return (
    <div className=" bg-white w-full  duration-300 p-5 my-5 xl:my-0  mx-auto text-center ">
      <div className="flex flex-row md:flex  items-center justify-start ">
        {/* users profile image link will go here */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-12 h-12 rounded-full ring ring-transparent ring-offset-[#dc4734]  ring-offset-2">
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
        </div>
        <label
          htmlFor="my-modal"
          className="w-full flex items-center justify-between px-6 ml-3 py-2 text-md rounded-full shadow-inner outline-none text-center text-gray-400 bg-[#f1f1f1] "
        >
          <span className="overflow-x-hidden">{`Say something`}</span>
          <span>
            <FaSearch className="text-md "></FaSearch>
          </span>
        </label>
        <div className="">
          {/* <div>
            <button title="Add Post" onClick={() => setShowCreatePost(1)}>
              <HiPencilAlt className="w-8 h-8  text-black hover:scale-110 duration-100 hover:text-[#3C2317]"></HiPencilAlt>
            </button>
          </div> */}
          {/* <div>
            <button onClick={() => setShowCreatePost(2)}>
              <FaImages className="w-8 h-8  text-black hover:scale-110 duration-100 hover:text-[#3C2317]"></FaImages>
            </button>
          </div> */}
          {/* {showCreatePost !== 0 && (
            <div>
              <button onClick={() => setShowCreatePost(0)}>
                <BsBackspace className="w-7 h-7 text-black hover:scale-110 duration-100 hover:text-[#3C2317]"></BsBackspace>
              </button>
            </div>
          )} */}
        </div>
      </div>
      {/* This is for normal post*/}

      {/* {showCreatePost === 1 && (
        
      )} */}

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-1">Create Post</h3>
          <hr />
          <p className="text-left text-lg font-semibold ml-2 my-2">
            What's on your mind, {userdata?.name}
          </p>
          <div className="flex flex-col justify-content items-center w-full">
            <input
              required
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Post Title"
              className="bg-white placeholder-[#36454F] shadow-inner shadow-gray-200 text-black  w-full h-10 mb-5 pl-4   duration-200  outline-none "
            />
            <textarea
              required
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
              placeholder="Enter Post Content"
              className="bg-white placeholder-[#36454F]  duration-200 outline-none shadow-inner shadow-gray-200  text-black  w-full  mb-5 h-20  pl-4  pt-2"
            />
            {/* images below */}
            <div className={` pt-4  w-full`}>
              <div className="flex flex-col justify-content items-center w-full ">
                <label
                  htmlFor="fileImg"
                  onClick={handleMultiplePicAdd}
                  className={
                    selectedImages.length > 2
                      ? "bg-white py-2 w-full  font-bold  text-red-500 border-2 border-red-500 mb-2"
                      : "bg-white py-2 w-full text-[#36454F] font-bold  border-2 border-gray-400"
                  }
                >
                  {selectedImages.length > 2 ? (
                    "Can't Upload More"
                  ) : (
                    <div className="flex justify-center items-center space-x-2 ">
                      <div className="text-md">Add images to your post</div>
                      <div className="text-xl">
                        <FaImages></FaImages>
                      </div>
                    </div>
                  )}
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2 mt-2">
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
                {selectedImageInput.length !== 0 && (
                  <button
                    onClick={handlePhotoSubmit}
                    disabled={imglinkPost.length !== 0 ? true : false}
                    className=" mb-3 px-2  w-full h-10 bg-blue-400   hover:bg-white shadow-md hover:shadow-gray-600 hover:border-blue-400 hover:border-2  hover:text-blue-400 text-white font-bold hover:translate-y-[-4px] duration-200"
                  >
                    {imglinkPost.length === 0 ? "Upload Pictures" : "Uploaded"}
                  </button>
                )}
              </div>
            </div>

            <button
              className="w-full mt-2  h-10 bg-[#dc4734]  hover:bg-white shadow-md hover:shadow-gray-600 hover:border-[#dc4734]  hover:border-2  hover:text-[#dc4734]  text-white font-bold hover:translate-y-[-4px] duration-200"
              onClick={handleSubmit}
            >
              Submit Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
