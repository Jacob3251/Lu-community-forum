import React from "react";
import WelcomeLogo from "../../images/mainlogo.png";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
const WelcomePage = () => {
  return (
    <div className="h-[100vh]">
      <div className="h-[90vh]  pb-20  ">
        <div className="h-full  ">
          <h1 className=" text-4xl text-center mx-auto mt-5">
            Welcome to{" "}
            <span className="text-error font-extrabold font-serif">
              LU community Forum
            </span>
          </h1>
          <div className="h-full flex justify-center items-center ">
            <div className="h-4/5 p-10 flex justify-center items-center  my-10">
              <div className="md:mr-20 max-h-fit ">
                <img className="rounded-lg " src={WelcomeLogo} alt="" />
              </div>
              <div className="">
                <Login></Login>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="h-[10vh]" />
    </div>
  );
};

export default WelcomePage;
