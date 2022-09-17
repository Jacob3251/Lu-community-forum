import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="py-10 px-16 bg-slate-400 text-center rounded-md">
        <h2 className=" mb-5 text-2xl font-bold">404 Error: Page not found</h2>
        <Link
          to="/home"
          className=" bg-blue-500 font-semibold text-white hover:shadow-stone-500 hover:shadow-md  rounded-[30px] px-5 py-2"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
