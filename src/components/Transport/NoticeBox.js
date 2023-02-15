import React from "react";

const NoticeBox = ({ id, link, title, number }) => {
  return (
    <div className="w-full mb-5 bg-white p-2 ">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-bold">SL: {number}</h3>
        <h3 className="text-md font-semibold overflow-scroll-y-0">{title}</h3>
        <div>
          <div className="flex space-x-4 text-[14px]">
            <button className="w-full my-2 px-5  py-3 bg-[#dc4734] border-2 border-[#dc4734] hover:bg-white text-white hover:text-[#dc4734] font-bold duration-200 ">
              <a href={link} target="_blank">
                Link
              </a>
            </button>
            <button className="w-full my-2 px-5  py-3 bg-[#dc4734] border-2 border-[#dc4734] hover:bg-white text-white hover:text-[#dc4734] font-bold duration-200 ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBox;
