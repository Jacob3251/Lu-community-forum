import React from "react";

const NoticeBoxStudent = ({ id, link, title, number }) => {
  return (
    <div className="flex bg-white my-5 px-2 py-2 font-[14px] font-bold justify-between items-center">
      <h3>{number}</h3>
      <h3>{title}</h3>

      <a
        href={link}
        target="_blank"
        alt="img"
        className="w-32 flex justify-center items-center bg-[#dc4734] border-[#dc4734] border-2 text-white hover:text-[#dc4734] px-3 py-2 font-bold tracking-wider  hover:bg-white  duration-200"
      >
        Link
      </a>
    </div>
  );
};

export default NoticeBoxStudent;
