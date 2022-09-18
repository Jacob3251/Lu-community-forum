import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { useRef } from "react";
const Login = () => {
  const [signInWithEmailAndPassword, user, loadinglogin, errorlogin] =
    useSignInWithEmailAndPassword(auth);
  const formRef = useRef();
  const [loggedUser, setLoggedUser] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://cryptic-plateau-06322.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoggedUser(data);
      });
  }, [loggedUser]);
  // const [user] = useAuthState(auth);
  const from = location?.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const email = formRef.current[0].value;
    const pass = formRef.current[1].value;
    // console.log(email);
    const matched = loggedUser.find((u) => u.email === email);
    console.log("Login matched value: ", matched);

    if (matched) {
      signInWithEmailAndPassword(email, pass).then(() => {
        event.target.reset();
        navigate("/demo");
      });
    } else {
      alert(`${email} is not registered`);
      event.target.reset();
      navigate("/register");
    }
  };

  return (
    <motion.div
      className="text-center bg-gray-200 rounded-lg w-96 h-[500px] py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Email and Password div */}
      <div>
        <form
          onSubmit={handleLogin}
          className=" py-4 px-auto text-left mx-12"
          ref={formRef}
        >
          <h3 className="text-3xl my-2 text-center font-semibold ">Log In</h3>
          <input
            type="email"
            placeholder="Enter university email"
            className="text-black h-10 w-full rounded-lg pl-4 my-5"
          />
          {/* <h3 className="text-xl my-2">Enter password</h3> */}
          <input
            type="password"
            placeholder="Enter password"
            className="text-black h-10 w-full rounded-lg pl-4"
          />
          <button className="my-2 text-blue-700">
            <Link to="/forgotemail">Forgot Password</Link>
          </button>{" "}
          <br />
          <button className="bg-blue-800 text-white rounded-md w-full h-9 font-bold my-4">
            <input type="submit" value="Login" />
          </button>
        </form>

        <br />

        <div className="py-8">
          <hr className="border-dashed bg-slate-600" />

          <button className="bg-green-700 text-white font-semibold rounded-md w-4/5 h-14 mt-5">
            <Link to="/register">Create New Account</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
