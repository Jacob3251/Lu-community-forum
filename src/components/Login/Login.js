import React, { useState } from "react";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
const Login = () => {
  const [signInWithEmailAndPassword, user, loadinglogin, errorlogin] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // const [user] = useAuthState(auth);
  const from = location?.state?.from?.pathname || "/";
  const handleLogin = () => {
    // if (user) {
    //   signOut(auth);
    // } else {
    signInWithEmailAndPassword(email, pass).then(() => {
      navigate("/demo");
    });

    // setTimeout(function () {
    //   <Loader></Loader>;
    // }, 5 * 1000);
    // }

    // {
    //   userlogin.emailVerified ? navigate(from, { replace: true }) : signOut();
    // }
    // (user) => {
    //   console.log(user);
    //   const verifiedEmail = user.emailVerified;
    // if (verifiedEmail) {
    //   navigate(from, { replace: true });
    // } else {
    //   signOut();
    //   let loginalert = window.confirm("verify your email then login");
    //   if (loginalert) {
    //     window.reload();
    //   }
    // }

    // console.log();
  };
  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("password reset email sent");
    });
  };
  return (
    <motion.div
      className="text-center bg-slate-700 rounded-lg w-96 h-[500px] py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Email and Password div */}
      <div>
        <div className=" py-4 px-auto text-left mx-12">
          <h3 className="text-xl my-2">Enter Email</h3>
          <input
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter university email"
            className="text-black"
          />
          <h3 className="text-xl my-2">Enter password</h3>
          <input
            onBlur={(e) => {
              setPass(e.target.value);
            }}
            type="password"
            placeholder="Enter password"
            className="text-black"
          />
        </div>

        <button
          onClick={handleLogin}
          className="bg-blue-800 text-white rounded-md w-20 h-9 font-bold my-4"
        >
          Login
        </button>
        <br />
        <button className="my-2 text-blue-700" onClick={handleForgetPassword}>
          <h3>Forgot Password</h3>
        </button>
        <div className="py-8">
          <hr className="border-dashed" />

          <button className="bg-green-700 rounded-md w-28 h-12 mt-5">
            <Link to="/register">Create New Account</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
