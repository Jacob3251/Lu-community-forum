import React from "react";

const UniversityPostBox = ({ title, content, type }) => {
  return (
    <div className="w-full">
      <div className="bg-white  rounded-2xl mx-auto my-5 shadow-lg">
        {/* top part  */}
        <div className="w-5/6 mx-auto">
          <div className="flex pt-6 pb-4 justify-between items-center  ">
            <div className="flex">
              <div>
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <div className="font-medium text-md">{title}</div>
                <div className="font-normal text-gray-600">timestamp</div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10 p-2 mr-5 rounded-full bg-red-400 hover:bg-red-500 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
        {/* content part */}
        <div className="w-5/6 mx-auto text-left pb-5 ">
          <h3>{type}</h3>
          <div className="mt-4">
            <p className="text-xs">{content}</p>
          </div>
          <div className=" py-3">
            <div className="flex justify-between mb-2">
              <div className="text-gray-700"> 20 Likes . 10 dislikes</div>
              <div className="text-gray-700"> 60 comments</div>
            </div>
            {/* <div className="flex justify-between">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityPostBox;
