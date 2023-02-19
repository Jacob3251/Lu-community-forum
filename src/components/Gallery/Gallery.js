import React, { useState } from "react";
import Footer from "../Footer/Footer";
import GalleryPostObj from "./GalleryPostObj";

import { useEffect } from "react";
import { Puff } from "react-loader-spinner";
const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [galleryDataLoader, setGalleryDataLoader] = useState(true);

  const CustomFormatter = (arr) => {
    let x = [];
    for (let i = 0; i < arr.length; i++) {
      const y = {
        src: arr[i],
        sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
      };
      x.push(y);
    }
    return x;
  };
  useEffect(() => {
    fetch("https://lu-community-forum-backend.up.railway.app/gallerypost")
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
        setGalleryDataLoader(false);
      });
  }, []);
  return (
    <div className="w-full pt-[5rem]">
      <div className="w-[80%] mx-auto">
        <h3 className="text-center md:text-start font-bold text-lg  my-5">
          Event Gallery
        </h3>
      </div>
      {/* Gallery Posts container */}
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
          <h3 className="animate-bounce400 font-bold text-lg mt-2">Loading</h3>
        </div>
      ) : (
        <div
          className={`md:grid flex flex-col md:grid-cols-2 gap-5   w-[80%] mx-auto place-content-center place-items-center mb-10  rounded-xl ${
            galleryData.length === 0 ? " md:grid-cols-1" : ""
          }`}
        >
          {galleryData.length !== 0 ? (
            galleryData.map((obj) => (
              <GalleryPostObj
                key={obj?._id}
                images={CustomFormatter(obj?.links)}
                title={obj?.title}
              ></GalleryPostObj>
            ))
          ) : (
            <div
              className={`w-full  flex h-[70vh] font-bold text-[#36454f] justify-center items-center `}
            >
              No Gallery Post Added
            </div>
          )}
        </div>
      )}
      <Footer footerClass={"w-full"}></Footer>
    </div>
  );
};

export default Gallery;
