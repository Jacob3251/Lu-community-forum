import React from "react";

const NoticeBox = ({ id, link, title, number }) => {
  return (
    <div className="w-full mb-5 bg-white rounded-lg px-8 py-3">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-bold">SL: {number}</h3>
        <h3 className="text-md font-semibold">{title}</h3>
        <div className="flex space-x-4">
          <button className="w-full my-2 px-5  py-3 bg-[#628e90] hover:bg-[#3c2317] text-white text-lg font-bold scale-95 hover:scale-100 duration-200 rounded-md">
            <a href={link} target="_blank">
              Link
            </a>
          </button>
          <button className="w-full my-2  px-5 py-3 bg-[#628e90] hover:bg-red-600 text-white text-lg font-bold scale-95 hover:scale-100 duration-200 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBox;
