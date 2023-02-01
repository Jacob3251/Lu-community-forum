import React, { useState } from "react";
import Footer from "../Footer/Footer";
import GalleryPostObj from "./GalleryPostObj";
import cmc1 from "../../images/club/Computer club/1.jpg";
import cmc2 from "../../images/club/Computer club/2.jpg";
import cmc3 from "../../images/club/Computer club/3.jpg";
import cmc4 from "../../images/club/Computer club/4.jpg";
import cmc5 from "../../images/club/Computer club/5.jpg";

import cc1 from "../../images/club/Cultural club/1.jpg";
import cc2 from "../../images/club/Cultural club/2.jpg";
import cc3 from "../../images/club/Cultural club/3.jpg";
import cc4 from "../../images/club/Cultural club/4.jpg";
import cc5 from "../../images/club/Cultural club/5.jpg";

import ss1 from "../../images/club/social club/1.jpg";
import ss2 from "../../images/club/social club/2.jpg";
import ss3 from "../../images/club/social club/3.jpg";
import ss4 from "../../images/club/social club/4.jpg";
import { useEffect } from "react";
import { Puff } from "react-loader-spinner";
const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [galleryDataLoader, setGalleryDataLoader] = useState(true);
  const images1 = [
    {
      src: cmc1,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: cmc2,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: cmc3,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: cmc4,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: cmc5,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
  ];
  const images2 = [
    {
      src: cc1,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: cc2,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: cc3,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: cc4,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: cc5,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
  ];
  const images3 = [
    {
      src: ss1,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: ss2,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: ss3,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: ss4,
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
  ];
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
    fetch("http://localhost:9000/gallerypost")
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
        setGalleryDataLoader(false);
      });
  }, []);
  return (
    <div className="">
      <h3 className="text-center font-mono font-bold text-lg md:text-2xl lg:text-4xl my-8">
        Gallery de Memorial
      </h3>
      {/* Gallery Posts container */}
      {galleryDataLoader ? (
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
        <div className="md:grid flex flex-col md:grid-cols-2 gap-5  w-[80%] mx-auto place-content-center place-items-center p-14 mb-10 bg-white bg-opacity-40 rounded-xl">
          {galleryData.length !== 0 &&
            galleryData.map((obj) => (
              <GalleryPostObj
                key={obj?._id}
                images={CustomFormatter(obj?.links)}
                title={obj?.title}
              ></GalleryPostObj>
            ))}
        </div>
      )}
      <Footer footerClass={"w-[100vw]"}></Footer>
    </div>
  );
};

export default Gallery;
