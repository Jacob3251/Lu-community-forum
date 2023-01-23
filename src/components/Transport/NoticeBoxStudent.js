import React from "react";

const NoticeBoxStudent = ({ id, link, title, number }) => {
  return (
    <div className="flex bg-white my-5 px-2 py-2 justify-between items-center">
      <h3>{number}</h3>
      <h3>{title}</h3>

      <a
        href={link}
        target="_blank"
        alt="img"
        className="w-32 flex justify-center items-center bg-[#628e90] scale-95 text-white p-3 font-medium tracking-wider rounded-md hover:bg-[#0cabc7] hover:scale-100 duration-200"
      >
        Link
      </a>
    </div>
  );
};

export default NoticeBoxStudent;
