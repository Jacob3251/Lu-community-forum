import React from "react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import { HiDotsVertical } from "react-icons/hi";
import { useEffect } from "react";
import { useState } from "react";

const PostBox = ({ title, content, email, postId }) => {
  const [userdata, setUserdata] = useState({});
  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((data) => {
        const found = data[0].find((u) => u.email === email);
        const found1 = data[1].find((u) => u.email === email);
        // console.log("found in student: ", found);
        // console.log("found in teacher: ", found1);
        if (found) {
          setUserdata(found);
        }
        if (found1) {
          setUserdata(found1);
        }
      });
  }, []);
  return (
    <div className="w-[80%] mx-auto">
      <div className="bg-[#628E90]  rounded-2xl mx-auto my-5 shadow-lg">
        {/* top part  */}
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
              <div className="font-medium text-md text-[#F5EFE6] ">
                {userdata?.name}
              </div>
              <div className="font-normal text-[#F5EFE6]">timestamp</div>
            </div>
          </div>
          <div>
            <button className="btn btn-ghost text-[#F5EFE6]">
              <HiDotsVertical className="h-5 w-5 mr-2">Options</HiDotsVertical>
            </button>
          </div>
        </div>
        {/* content part */}
        <div className="w-full px-6 mx-auto text-left pb-2 ">
          <h3 className="text-[#3C2317] font-bold">{title}</h3>
          <div className="mt-1 ">
            <p className="text-base text-[#F5EFE6]">{content}</p>
          </div>
          <div className=" py-3">
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
                <button className="btn btn-ghost text-[#F5EFE6]">
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
