import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import "./Gallery.css";
const GalleryPostObj = ({ images }) => {
  return (
    <div className="">
      <div className="w-[350px] h-[250px]">
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
      <h3 className="font-bold mt-5 text-md text-start bg-red-400 overflow-hidden">
        Ola Murgi Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Totam numquam nam consequuntur saepe corporis laborum quam aut tenetur
        atque corrupti. Rem modi odio expedita corporis magni impedit aliquam
        quae. Rerum, fugiat sequi necessitatibus quia corrupti veniam quod quas!
        Ex fuga autem consequuntur. Laudantium distinctio unde itaque! Animi eum
        quo iure?
      </h3>
    </div>
  );
};

export default GalleryPostObj;
