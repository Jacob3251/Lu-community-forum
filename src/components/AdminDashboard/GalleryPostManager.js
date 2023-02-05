import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import moment from "moment";
import React, { useState } from "react";
import { v4 } from "uuid";
import { storage } from "../../firebase.init";

const GalleryPostManager = () => {
  const [galleryPictureFile, setGalleryPictureFile] = useState(null);
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
    fetch("http://localhost:9000/gallerypost", {
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
  return (
    <div className="">
      <h3 className="bg-[#628e90] rounded-md text-2xl font-bold text-center text-white py-5">
        Gallery Post Submission
      </h3>

      <div className="flex flex-col mt-14 justify-start w-[85%] p-5 bg-white mx-auto">
        <input
          required
          className="py-3 my-5 scale-95 pl-3 bg-slate-100  placeholder:text-lg rounded-md "
          type="text"
          placeholder="Enter title"
          name="title"
          onBlur={(e) => setTitle(e.target.value)}
        />
        <h3 className="text-lg font-bold text-start scale-95">
          Upload Picture's
        </h3>
        <input
          required
          type="file"
          multiple
          onChange={(e) => setGalleryPictureFile(e.target.files)}
          className=" w-full  scale-95"
          // style={{ visibility: "hidden" }}
        />

        <button
          onClick={uploadGalleryFileInFirebase}
          disabled={imglinkGallery.length !== 0 ? true : false}
          // disabled={imglingProfilePicUploadStatus ? true : false}
          className={`w-full rounded-md  bg-slate-100 font-bold  my-3 text-lg py-3 scale-95 duration-200  ${
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
          className={`w-full  rounded-md  bg-slate-100 font-bold  mb-3 text-lg py-3 scale-95  duration-200 hover: ${
            imglinkGallery.length === 0
              ? "text-red-400"
              : "text-blue-500 hover:scale-100 hover:bg-slate-200"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default GalleryPostManager;
