import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import "./Gallery.css";
const GalleryPostObj = ({ images, title }) => {
  return (
    <div
      className="bg-white px-2 py-5 w-full "
      style={{ boxShadow: "0px 1px 15px 0px rgb(51 51 51 / 20%)" }}
    >
      <div className="h-[250px] lg:h-[300px] ">
        <Carousel
          className="framed-carousel"
          hasTransition={true}
          isLoop={true}
          isMaximized={false}
          hasSizeButton={false}
          hasMediaButton={false}
          hasIndexBoard={false}
          hasLeftButton={false}
          hasRightButton={false}
          hasCaptionsAtMax="top"
          hasDotButtonsAtMax="bottom"
          hasThumbnails={false}
          hasThumbnailsAtMax={true}
          thumbnailWidth={"10%"}
          thumbnailHeight={"10%"}
          shouldMaximizeOnClick={true}
          shouldMinimizeOnClick={true}
          isRTL={true}
          images={images}
        ></Carousel>
      </div>
      <h3 className="font-bold mt-5 text-md pl-3 text-start  overflow-hidden">
        {title}
      </h3>
    </div>
  );
};

export default GalleryPostObj;
