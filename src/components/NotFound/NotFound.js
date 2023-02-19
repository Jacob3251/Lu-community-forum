import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const NotFound = () => {
  return (
    <div className="w-full h-[100vh]  pt-16 flex justify-center items-center">
      <div className="py-20 w-2/3 h-[30vh] px-16  text-center">
        <h2 className=" mb-5 text-2xl font-bold">404 Error: Page not found</h2>
        <Link
          to="/home"
          className=" bg-[#dc4734] font-semibold text-white hover:shadow-stone-500 hover:shadow-md hover:traslate-y-[4px] hover:scale-110 duration-500 px-5 py-2"
        >
          Back to home
        </Link>
      </div>
      <Footer footerClass={"w-full absolute bottom-0"}></Footer>
    </div>
  );
};

export default NotFound;
