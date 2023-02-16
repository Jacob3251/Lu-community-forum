import React from "react";

const NoticeBox = ({ id, link, title, number }) => {
  return (
    <div className="w-full mb-5 bg-slate-50 shadow-md shadow-gray-300 hover:drop-shadow-md p-2 ">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-[#36454f]">
          <h3 className="text-[14px] font-semibold">SL: {number}</h3>
          <h3 className="text-[14px] font-bold overflow-scroll-y-0">{title}</h3>
        </div>
        <div>
          <div className="flex space-x-2 text-[14px] ml-2">
            <button className="w-full my-2 px-2  py-1 bg-[#dc4734] border-2 border-[#dc4734] hover:bg-white text-white hover:text-[#dc4734] font-bold duration-200 ">
              <a href={link} target="_blank">
                Link
              </a>
            </button>
            <button className="w-full my-2 px-2  py-1 bg-[#dc4734] border-2 border-[#dc4734] hover:bg-white text-white hover:text-[#dc4734] font-bold duration-200 ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBox;
