import React, { useState } from "react";
import auth from "../../firebase.init";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
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
        <div className=" w-5/6  mx-auto bg-slate-200 py-10 rounded-xl shadow-lg ">
          <div className="text-center  w-5/6 mx-auto">
            <div>
              <h1 className="bg-blue-200 w-5/6 mx-auto text-xl font-bold outline outline-2 outline-offset-0 outline-gray-500 rounded-md py-2">
                Find Your Account
              </h1>
              <p className="py-6">
                Please enter your email address of your account.
              </p>
              {/* email part */}
              <form onSubmit={handleForgetPassword}>
                <div className="flex justify-center items-center">
                  <span className="text-xl mr-5">Enter Email</span>
                  <input
                    type="email"
                    className="h-8 w-1/3 rounded-md"
                    onBlur={handleEmail}
                  />
                </div>
                <div>
                  <button className="mt-10 bg-white hover:bg-blue-700 text-black mx-3 font-bold py-1 px-3  rounded ">
                    <Link to="/login">Return to Login</Link>
                  </button>
                  <button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 border border-blue-700 rounded">
                    <input type="submit" value="Submit" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotEmail;
