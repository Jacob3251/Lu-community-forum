import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ThreeDots } from "react-loader-spinner";
import { auth } from "../../firebase.init";
import useCommenter from "../../hooks/useCommenter";

const SingleComment = ({ item, commenter, postId }) => {
  const [user, loading] = useAuthState(auth);

  const [commenterInfo, commentLoading, admin] = useCommenter(commenter);
  if (commentLoading) {
    return <ThreeDots color="#628E90"></ThreeDots>;
  }
  const handleDelete = (item) => {
    // console.log(item);
    const data = { id: item };
    console.log(postId);
    fetch(
      `https://lu-community-forum-backend.up.railway.app/singlecomment/${postId}`,
      {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload();
  };

  return (
    <div className="">
      <div className="flex  justify-start w-full my-2">
        <div className="w-[50px] h-[50px] mr-2 ">
          <img
            className="w-full h-full rounded-full"
            src={
              commenterInfo?.profileImgLink
                ? commenterInfo?.profileImgLink
                : "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/322606456_1100683150600547_1204415821701307778_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF_VuH_XOTCkOWSZcyjAq4jQ9_MZb6ylNdD38xlvrKU17zAjE837BtO281MsVFG3IjB_4AMrfLfeHhPUtEcZLqk&_nc_ohc=yIp53cA6WpUAX8xBom1&tn=yOMv844MwfJ9HCmZ&_nc_ht=scontent.fdac31-1.fna&oh=00_AfD5JD5vcUa2lsjMctK7ZEIu97E-PVU6oRUsgVE4U2aU2g&oe=63B8031B"
            }
            alt=""
          />
        </div>
        <div
          className="bg-[#f1f1f1] w-[95%] relative"
          style={{
            margin: "0px 0",

            padding: "8px",
            borderRadius: "8px",
          }}
        >
          <h3 className="text-black font-bold text-[14px]">
            {commenterInfo.name}
          </h3>

          <p className="" style={{ color: "black", fontSize: "12px" }}>
            {item.commentContent}
          </p>
          <p style={{ color: "gray", fontSize: "10px" }}>{item.time}</p>
          {(user?.email === commenter || admin) && (
            <button
              onClick={() => handleDelete(item.commentId)}
              className="text-white bg-red-500 hover:bg-white border-2 border-white hover:border-[#dc4734] hover:text-[#dc4734] font-bold duration-200 text-xs p-1 rounded-md absolute top-1 right-2"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
