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
const Login = () => {
  const [signInWithEmailAndPassword, user, loadinglogin, errorlogin] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loggedUser, setLoggedUser] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:9000/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoggedUser(data);
      });
  }, []);
  // const [user] = useAuthState(auth);
  const from = location?.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();

    const matched = loggedUser.find((u) => u.email === email);
    console.log("Login matched value: ", matched);

    if (matched) {
      signInWithEmailAndPassword(email, pass).then(() => {
        navigate("/demo");
      });
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
        <form onClick={handleLogin} className=" py-4 px-auto text-left mx-12">
          <h3 className="text-xl my-2">Enter Email</h3>
          <input
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter university email"
            className="text-black h-10 w-full rounded-lg pl-4"
          />
          <h3 className="text-xl my-2">Enter password</h3>
          <input
            onBlur={(e) => {
              setPass(e.target.value);
            }}
            type="password"
            placeholder="Enter password"
            className="text-black h-10 w-full rounded-lg pl-4"
          />
          <button className="bg-blue-800 text-white rounded-md w-20 h-9 font-bold my-4">
            <input type="submit" value="Login" />
          </button>
        </form>

        <br />
        <button className="my-2 text-blue-700">
          <Link to="/forgotemail">Forgot Password</Link>
        </button>
        <div className="py-8">
          <hr className="border-dashed bg-slate-600" />

          <button className="bg-green-700 rounded-md w-32 h-14 mt-5">
            <Link to="/register">Create New Account</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
