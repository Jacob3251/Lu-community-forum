import React from "react";

const NoticeBox = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>Notice Title:</h3>
        <button className="btn bg-blue-500 rounded-lg">
          <a href="#">Link</a>
        </button>
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default NoticeBox;
