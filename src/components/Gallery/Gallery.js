import React from "react";
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
const Gallery = () => {
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
  return (
    <div className="h-[100%]">
      <h3 className="text-center font-pacifico font-bold text-4xl my-8">
        Gallery de Memorial
      </h3>
      {/* Gallery Posts container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 w-[80%] mx-auto place-content-center place-items-center pb-10 mb-10 bg-white bg-opacity-40 rounded-xl">
        <GalleryPostObj images={images1} title="Computer Club"></GalleryPostObj>
        <GalleryPostObj images={images2} title="Cultural Club"></GalleryPostObj>
        <GalleryPostObj
          images={images3}
          title="Social Services Club"
        ></GalleryPostObj>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
