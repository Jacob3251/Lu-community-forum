import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { v4 } from "uuid";
import { storage } from "../../firebase.init";
import { FaTrashAlt } from "react-icons/fa";
const GalleryPostManager = () => {
  const [galleryPictureFile, setGalleryPictureFile] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [galleryDataLoader, setGalleryDataLoader] = useState(true);
  const [title, setTitle] = useState("");
  const [imglinkGallery, setimglinkGallery] = useState([]);
  const time = moment().format("MMMM Do YYYY, h:mm:ss a");
  const uploadGalleryFileInFirebase = () => {
    // console.log(profile);
    if (galleryPictureFile == null) return;
    console.log(galleryPictureFile);
    for (let i = 0; i < galleryPictureFile.length; i++) {
      const fileRef = ref(
        storage,
        `galleryPictureImages/${galleryPictureFile[i].name + v4()}`
      ); //folder in firebase storage for uploded image
      uploadBytes(fileRef, galleryPictureFile[i]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setimglinkGallery((prev) => [...prev, url]);
        });
      });
    }
    alert("img added");
  };
  const postGalleryForm = () => {
    const newObj = {
      title: title,
      links: imglinkGallery,
      time: time,
    };
    console.log(newObj);
    fetch("https://lu-community-forum-backend.up.railway.app/gallerypost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setTitle("");
        setGalleryPictureFile(null);
        window.location.reload();
      });
  };

  const handleGalleryPostDelete = (id) => {
    const permission = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (permission) {
      fetch(
        `https://lu-community-forum-backend.up.railway.app/gallerypost/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json()) // or res.json()
        .then((res) => alert("Gallery Post Deleted"));
    }
  };
  useEffect(() => {
    fetch("https://lu-community-forum-backend.up.railway.app/gallerypost")
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
        setGalleryDataLoader(false);
      });
  }, [galleryData]);
  return (
    <div className="flex flex-col-reverse md:flex-row mx-auto md:w-full mt-5 md:mt-0 md:space-x-5 w-[90%]">
      <div className="w-full mt-5 md:mt-0">
        {galleryDataLoader ? (
          <div className="h-[90vh] w-full flex flex-col justify-center items-center pt-16">
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
            <h3 className="animate-bounce400 font-bold text-lg mt-2">
              Loading
            </h3>
          </div>
        ) : (
          <div>
            {galleryData.map((data) => (
              <div
                key={data._id}
                className="flex justify-between items-center hover:drop-shadow-md shadow-md shadow-gray-300 mb-2 bg-white py-3 w-full p-2 text-[14px] font-bold text-[#36454f]"
              >
                <div className="flex space-x-2">
                  <p>{"\u2B24"}</p>
                  <h3>{data.title}</h3>
                </div>
                <div
                  onClick={() => handleGalleryPostDelete(data._id)}
                  className="text-[18px] hover:text-[#dc4734] p-2 rounded-full border-2 hover:border-[#dc4734] border-white"
                >
                  <FaTrashAlt />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full ">
        <div className="bg-white">
          <h3 className="  text-[14px] font-bold text-center text-[#36454f] py-5">
            Gallery Post Submission
          </h3>

          <div className="flex flex-col justify-start  px-5">
            <input
              required
              className="py-3 mb-5 pl-3   placeholder:text-[12px] outline-none shadow-inner shadow-gray-400"
              type="text"
              placeholder="Enter title"
              name="title"
              onBlur={(e) => setTitle(e.target.value)}
            />
            <h3 className="text-[12px] font-bold text-start ml-2 mb-2">
              Upload Picture's
            </h3>
            <input
              required
              type="file"
              multiple
              onChange={(e) => setGalleryPictureFile(e.target.files)}
              className=" w-full  text-[12px] ml-2"
              // style={{ visibility: "hidden" }}
            />

            <button
              onClick={uploadGalleryFileInFirebase}
              disabled={imglinkGallery.length !== 0 ? true : false}
              // disabled={imglingProfilePicUploadStatus ? true : false}
              className={`w-full  bg-[#f1f1f1] font-bold  my-3 text-[14px] py-3  duration-200  ${
                imglinkGallery.length !== 0
                  ? "text-green-400 "
                  : "text-blue-300 hover:scale-100 hover:text-blue-500 hover:bg-slate-200"
              }`}
            >
              {imglinkGallery.length !== 0 ? "Uploaded" : "Upload"}
            </button>
            <button
              onClick={postGalleryForm}
              disabled={imglinkGallery.length === 0 ? true : false}
              htmlFor="profilepic-modal"
              className={`w-full  bg-[#f1f1f1] font-bold  mb-3 text-[14px] py-3  duration-200 ${
                imglinkGallery.length === 0
                  ? "text-red-400"
                  : "text-blue-500 hover:scale-100 hover:bg-slate-200"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPostManager;
