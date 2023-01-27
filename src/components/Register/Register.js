import React, { useEffect, useState } from "react";
import StudentRegistration from "../StudentRegistration/StudentRegistration";
import TeacherRegistration from "../TeacherRegistration/TeacherRegistration";
// import {
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
const Register = () => {
  const [userType, setUserType] = useState(0);
  const [userEmailType, setUserEmailType] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [registered, setRegistered] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [ertext, setErtext] = useState("");
  useEffect(() => {
    fetch("http://localhost:9000/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRegisteredUsers(data);
      });
  }, []);
  const handleEmail = (e) => {
    const useremail = e.target.value;
    console.log("registered users inside handle email ", registeredUsers);
    const matched = registeredUsers.find((u) => u.email === useremail);
    console.log("matched value is: ", matched);
    if (!matched) {
      const emailreg = /[a-z0-9._]*@lus.ac.bd$/.test(useremail);
      const studentreg = /^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(
        useremail
      )
        ? (setUserEmailType(1), setErtext(""), setEmail(useremail))
        : emailreg
        ? (setUserEmailType(2), setErtext(""), setEmail(useremail))
        : (setErtext("Please put correct email values"),
          setUserEmailType(0),
          setEmail(""));
      //   ? (setEmail(useremail), setErtext(""))
      //   : (setErtext("Please put correct values"),
      //     setEmail(""),
      //     console.log("wrongpass"));
      console.log(
        "email is :",
        email,
        "usertype is : ",
        userEmailType,
        "inside handleEmail"
      );
    } else {
      alert("user is already registered in database or verify email");
      window.location.reload();
    }
  };
  const handlePass = (e) => {
    const userpass = e.target.value;
    setPass(userpass);
  };
  const handleRePass = (e) => {
    const userRepass = e.target.value;
    let result = pass.localeCompare(userRepass);
    if (result === 0) {
      setPass(userRepass);
      setErtext("");
    } else {
      setErtext("Password and confirm pass didnot match");
    }
  };
  // Firebase Email Pass user creation below--

  const handleEmailVerification = (event) => {
    event.preventDefault();
    if ((email === "" || pass === "") && userEmailType === 0) {
      setErtext("Wrong inputs given 2");
      setEmail("");
      setPass("");
      console.log("Wrong input email or pass missing", email, pass);
      return;
    } else {
      if (userType === 1 && userEmailType === 1) {
        setRegistered(true);
      }
      if (userType === 2 && userEmailType === 2) {
        setRegistered(true);
      }
    }
    console.log("setRegister value: ", registered);
  };

  // Send Email verification

  return (
    <div>
      <div className="w-full bg-blue-500 flex justify-between items-center py-3 px-5">
        {/* header left side */}
        <div className="flex items-center">
          {/* <div>
              <img src={logo} alt="Varsity logo" className="w-10 h-10" />
            </div> */}
          <div className="text-lg text-white font-semibold ml-2">
            <Link to="/">LU Community Forum</Link>
          </div>
        </div>
        {/* header Links right side */}
        <div className="flex space-x-2 items-center">
          <div className="text-base text-black-400 font-medium bg-white font-serif px-5 py-1">
            <label htmlFor="my-modal-3" className="modal-button">
              Login
            </label>
          </div>
          <div className="text-base text-white font-medium bg-green-400 font-serif px-5 py-1">
            <Link to="/">Back to home</Link>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto py-14 px-10 my-10 bg-slate-200 h-[80vh]">
        {/* <Header></Header> */}
        <h3 className="text-4xl">Register Now</h3>
        <div className="divider"></div>
        {/* Student-Teacher checkbox */}
        <div className="flex my-2">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Student</span>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-red-500"
                onClick={() => setUserType(1)}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Teacher</span>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
                onClick={() => setUserType(2)}
              />
            </label>
          </div>
        </div>
        {/* Student-teacher checkbox complete email validation below-------*/}
        <form onSubmit={handleEmailVerification} className="flex my-4">
          <input
            type="text"
            placeholder="Enter university email"
            className="input input-bordered w-full max-w-xs mr-2 rounded-none h-14"
            onBlur={handleEmail}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="input input-bordered w-full max-w-xs mr-2 rounded-none h-14"
            onBlur={handlePass}
          />
          <input
            type="password"
            placeholder="Type password again"
            className="input input-bordered w-full max-w-xs rounded-none h-14"
            onChange={handleRePass}
          />
          <button className="btn ml-5 bg-blue-400 h-14 hover:translate-y-[2px] hover:bg-blue-500 border-none  text-white text-md rounded-none">
            <input type="submit" value="Submit" className="text-lg font-bold" />
          </button>
        </form>
        {ertext !== null && <p>{ertext}</p>}
        {/* {user && `<p>${user?.email}</p>`} */}
        {/* Email validation done */}
        {userType === 1 && registered === true && (
          <StudentRegistration
            email={email}
            password={pass}
            userType={userType}
          ></StudentRegistration>
        )}
        {userType === 2 && registered === true && (
          <TeacherRegistration
            email={email}
            password={pass}
            userType={userType}
          ></TeacherRegistration>
        )}
        {/* {user && `<p>${user?.emailVerified}</p>`} */}
        {/* {userType === 1 && registered === true && (
        <StudentRegistration></StudentRegistration>
      )}
      {userType === 2 &&
        registered === true(<TeacherRegistration></TeacherRegistration>)} */}
      </div>
      <Footer className="h-[10vh] absolute bottom-0"></Footer>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-5 top-2"
          >
            ✕
          </label>
          <div className=" pl-8">
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
