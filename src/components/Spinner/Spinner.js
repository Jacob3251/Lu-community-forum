import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border border-b-2 border-blue-500"></div>
      </div>
    </div>
  );
};

export default Spinner;
