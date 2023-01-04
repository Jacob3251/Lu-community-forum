import React from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HiDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const ImageBox = ({ links }) => {
  const navigate = useNavigate();
  // This function below will navigate to SingleImage component which is used to show full size images that is clicked
  const navigateToImage = (image) => {
    alert(image);
    navigate(`/${image}`);
  };
  return (
    <div className="w-[80%] mx-auto ">
      <div className="bg-[#628E90]  rounded-2xl mx-auto my-5 shadow-lg">
        <div className="w-full flex items-center justify-between px-5 mx-auto  pt-1">
          <div className="flex pt-6 pb-2 ">
            <div>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-transparent ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </div>
            <div className="ml-4">
              <div className="font-medium text-md text-[#F5EFE6] ">Ola</div>
              <div className="font-normal text-[#F5EFE6]">timestamp</div>
            </div>
          </div>
          <div>
            <button className="btn btn-ghost text-[#F5EFE6]">
              <HiDotsVertical className="h-5 w-5 mr-2">Options</HiDotsVertical>
            </button>
          </div>
        </div>
        <div className="w-full px-6 mx-auto text-left pb-2 ">
          <h3 className="text-[#3C2317] font-bold">title</h3>
          <div className="mt-1 ">
            <p className="text-base text-[#F5EFE6]">content</p>
          </div>
        </div>
        {/* Image body */}
        <div className="w-full h-[200px] md:h-[500px] bg-[#faf0e6] mb-2 px-0 md:px-2">
          {links.length === 1 && (
            <img
              onClick={() => navigateToImage("0")}
              className="w-[500px] px-2 md:px-0 h-full mx-auto hover:scale-[101%] duration-200"
              src={`${links[0]}`}
              alt=""
            />
          )}
          {links.length === 2 && (
            <div className="h-full w-[90%] mx-auto flex justify-center">
              <img
                onClick={() => navigateToImage("0")}
                className=" h-full w-[50%]   hover:scale-[101%] duration-200"
                src={`${links[0]}`}
                alt=""
              />
              <img
                onClick={() => navigateToImage("2")}
                className=" h-full w-[50%] hover:scale-[101%] duration-200"
                src={`${links[1]}`}
                alt=""
              />
            </div>
          )}

          {links.length === 3 && (
            <div className="h-full w-[90%] mx-auto flex justify-center">
              <img
                onClick={() => navigateToImage("0")}
                className=" h-full w-[50%]  hover:scale-[101%] duration-200"
                src={`${links[0]}`}
                alt=""
              />
              <div className=" h-full ">
                <img
                  onClick={() => navigateToImage("1")}
                  className=" h-[50%] w-full hover:scale-[101%] duration-200"
                  src={`${links[1]}`}
                  alt=""
                />
                <img
                  onClick={() => navigateToImage("2")}
                  className=" h-[50%] w-full hover:scale-[101%] duration-200"
                  src={`${links[2]}`}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        {/* Bottom part */}
        <div className="py-3 px-6">
          <div className="flex justify-between mb-2">
            <div className="text-[#F5EFE6]"> 20 Likes . 10 dislikes</div>
            <div className="text-[#F5EFE6]"> 60 comments</div>
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="flex  ">
              <button className="btn btn-ghost text-[#F5EFE6]">
                <HandThumbUpIcon className="h-6 w-6 mr-2" /> Like
              </button>
              <button className="btn btn-ghost text-[#F5EFE6]">Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
