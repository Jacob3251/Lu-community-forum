import React from "react";
import Footer from "../Footer/Footer";
import GalleryPostObj from "./GalleryPostObj";

const Gallery = () => {
  const images = [
    {
      src: "https://phantom-marca.unidadeditorial.es/2d2ef26a888c2b1583e6e7ebf2e61b90/resize/1320/f/jpg/assets/multimedia/imagenes/2022/10/16/16659422008903.jpg",
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: "https://i.redd.it/z13vf8qb598a1.jpg",
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
    {
      src: "https://assets.entrepreneur.com/content/3x2/2000/20190111162956-jessica-alba.jpeg?crop=1:1",
      sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    },
  ];
  return (
    <div className="h-[100%]">
      <h3 className="text-center font-pacifico font-bold text-4xl my-8">
        Gallery de Memorial
      </h3>
      {/* Gallery Posts container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 w-[80%] mx-auto place-content-center place-items-center pb-10 mb-10 bg-white bg-opacity-40 rounded-xl">
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
        <GalleryPostObj images={images}></GalleryPostObj>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
