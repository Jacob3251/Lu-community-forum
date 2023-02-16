import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
const ForgotEmail = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    const userEmail = e.target.value;
    setEmail(userEmail);
  };
  const handleForgetPassword = async (event) => {
    event.preventDefault();
    await sendPasswordResetEmail(email).then();
    if (error) {
      alert(`${error.message}`);
      window.location.reload();
    }
    if (!error) {
      console.log("password reset email sent");
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="h-[100vh] flex justify-center items-center ">
        <div className=" w-5/6  mx-auto bg-white py-10  shadow-md shadow-gray-500 hover:drop-shadow-md ">
          <div className="text-center  w-5/6 mx-auto">
            <div>
              <h1 className=" w-5/6 mx-auto text-xl font-bold  py-2">
                Find Your Account
              </h1>
              <p className="py-3 text-start font-bold">
                Please enter your email address of your account.
              </p>
              {/* email part */}
              <form onSubmit={handleForgetPassword}>
                <div className="flex justify-center items-center">
                  <input
                    type="email"
                    className=" w-full pl-3 outline-none shadow-inner shadow-gray-400 py-2 rounded-md"
                    placeholder="Enter email"
                    onBlur={handleEmail}
                  />
                </div>
                <div>
                  <button className="mt-10 bg-white hover:bg-[#dc4734] hover:text-white text-[#dc4734] mx-3 font-bold py-1 border-white border-2 hover:border-[#dc4734] px-3   ">
                    <Link to="/login">Return to Login</Link>
                  </button>
                  <button className="mt-10 bg-[#dc4734] hover:bg-white hover:text-[#dc4734] text-white font-bold py-1 px-3 border-2 duration-200 border-[#dc4734] ">
                    <input type="submit" value="Submit" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer footerClass="w-full"></Footer>
    </div>
  );
};

export default ForgotEmail;
