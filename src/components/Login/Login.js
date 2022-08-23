import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
const auth = getAuth(app);
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, pass).then(() => {
      navigate(from, { replace: true });
    });
    console.log(error);
  };
  return (
    <div className="text-center bg-slate-700 rounded-lg w-96 h-[500px] py-6">
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
        <div className="my-2 text-blue-700">
          <a href="/register">Forgotten password</a>
        </div>
        <div className="py-8">
          <hr className="border-dashed" />

          <button className="bg-green-700 rounded-md w-28 h-12 mt-5">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
