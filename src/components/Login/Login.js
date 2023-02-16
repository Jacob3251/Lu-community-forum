import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { useRef } from "react";
import Footer from "../Footer/Footer";
const Login = () => {
  const [signInWithEmailAndPassword, user, loadinglogin, errorlogin] =
    useSignInWithEmailAndPassword(auth);
  const formRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/user")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLoggedUser(data);
      });
  }, [loggedUser]);
  // const [user] = useAuthState(auth);
  const from = location?.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (errorlogin) {
    errorElement = (
      <div className="text-center font-normal text-sm text-red-500">
        Error: {errorlogin.message}
      </div>
    );
  } else {
    errorElement = null;
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const email = formRef.current[0].value;
    const pass = formRef.current[1].value;
    // console.log(email);
    const matched = loggedUser.find((u) => u.email === email);
    console.log("Login matched value: ", matched);
    if (matched) {
      signInWithEmailAndPassword(email, pass);
      event.target.reset();
    } else {
      alert(`${email} is not registered`);
      event.target.reset();
      navigate("/register");
    }
  };

  return (
    <div className="relative">
      <div className="text-center w-[95%] mx-auto md:w-full h-[100vh] pt-[30%]  md:pt-[10%] flex justify-center items-center flex-col">
        {/* Email and Password div */}
        <div className="bg-white mb-20  shadow-md shadow-gray-400 hover:drop-shadow-md">
          <form
            onSubmit={handleLogin}
            className="pt-10  px-auto text-left mx-12 text-[#36454f]"
            ref={formRef}
          >
            <h3 className="text-[24px] my-2 text-center font-semibold font-pacifico">
              Log In
            </h3>
            <input
              type="email"
              placeholder="Enter university email"
              className="text-black shadow-gray-500 placeholder:text-[12px] placeholder:text-gray-600 outline-none w-full shadow-inner pl-4 my-5 py-3"
            />
            {/* <h3 className="text-xl my-2">Enter password</h3> */}
            <input
              type="password"
              placeholder="Enter password"
              className="text-black shadow-gray-500 placeholder:text-[12px] placeholder:text-gray-600 outline-none w-full shadow-inner pl-4 my-5 py-3"
            />
            <button className="my-2 text-[#dc4734] flex">
              <Link to="/forgotemail" className="text-[14px]">
                Forgot Password?
              </Link>
            </button>
            <br />
            {errorElement}
            <button className="bg-[#dc4734] text-white text-[14px] w-full py-3 font-bold hover:bg-white border-2 border-[#dc4734] hover:text-[#dc4734]">
              <input type="submit" value="LOGIN" />
            </button>
          </form>
          <div className="text-[#36454f] mb-24 font-bold text-[14px] mt-4">
            Don't have an account?
            <Link
              className="ml-2 text-[#dc4734] hover:underline"
              to="/register"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>
      <Footer footerClass="w-full"></Footer>
    </div>
  );
};

export default Login;
