import React from "react";

const NoticeBoxStudent = ({ id, link, title, number }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h3>{number}</h3>
        <h3>{title}</h3>
        <div className="flex space-x-4">
          <button className="w-32 bg-blue-500 text-white p-3 font-medium tracking-wider rounded-sm hover:bg-[#0cabc7] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <a href={link} target="_blank">
              Link
            </a>
          </button>
        </div>
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default NoticeBoxStudent;
