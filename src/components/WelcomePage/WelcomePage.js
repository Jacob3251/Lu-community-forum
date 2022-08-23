import React from "react";
import WelcomeLogo from "../../images/mainlogo.png";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
const WelcomePage = () => {
  return (
    <div className="">
      <div className="min-h-[60vh] my-10">
        <h1 className=" text-4xl text-center mx-0 my-10">
          Welcome to{" "}
          <span className="text-error font-extrabold font-serif">
            LU community Forum
          </span>
        </h1>
        <div className="flex justify-evenly items-center ">
          <div className="">
            <img className="rounded-lg " src={WelcomeLogo} alt="" />
          </div>
          <div className="">
            <Login></Login>
          </div>
        </div>
      </div>
      <Footer className="sticky bottom-0 w-full " />
    </div>
  );
};

export default WelcomePage;
