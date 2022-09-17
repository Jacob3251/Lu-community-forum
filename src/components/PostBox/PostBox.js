import React from "react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
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
    <div className="">
      <div className="bg-white  rounded-2xl mx-auto my-5 shadow-lg">
        {/* top part  */}
        <div className="w-5/6 mx-auto">
          <div className="flex pt-6 pb-4">
            <div>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </div>
            <div className="ml-4">
              <div className="font-medium text-md">{userdata?.name}</div>
              <div className="font-normal text-gray-600">timestamp</div>
            </div>
          </div>
        </div>
        {/* content part */}
        <div className="w-5/6 mx-auto text-left pb-5">
          <h3>{title}</h3>
          <div className="mt-4">
            <p className="text-xs">{content}</p>
          </div>
          <div className=" py-3">
            <div className="flex justify-between mb-2">
              <div className="text-gray-700"> 20 Likes . 10 dislikes</div>
              <div className="text-gray-700"> 60 comments</div>
            </div>
            <div className="flex justify-between">
              <div className="flex  ">
                <button className="btn btn-ghost">
                  <HandThumbUpIcon className="h-6 w-6 mr-2" /> Like
                </button>
                <button className="btn btn-ghost">
                  <HandThumbDownIcon className="h-6 w-6 mr-2" /> Dislike
                </button>
              </div>
              <div>
                <button className="btn btn-ghost">Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
