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
    fetch("https://lu-community-forum-backend.up.railway.app/user")
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
      setErtext("Password and confirm password did not match");
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
    <div className="pt-16">
      <div className="w-4/5 mx-auto pt-10 pb-14 px-10 mb-10  text-[14px]">
        {/* <Header></Header> */}
        <div className="mt-2 bg-white px-5">
          <h3 className="text-[24px] text-center font-bold">Register Now</h3>
          <div className="divider"></div>
          {/* Student-Teacher checkbox */}
          <div className="flex flex-col md:flex-row my-2 ">
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
          <form
            onSubmit={handleEmailVerification}
            className="flex  flex-col justify-center items-center w-full mx-auto my-4 py-5"
          >
            <input
              type="text"
              placeholder="Enter university email"
              className="w-full py-3 pl-3 outline-none shadow-inner shadow-gray-400   duation-200 my-2"
              onBlur={handleEmail}
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full py-3 pl-3 outline-none shadow-inner shadow-gray-400  duation-200 my-2"
              onBlur={handlePass}
            />
            <input
              type="password"
              placeholder="Type password again"
              className="w-full py-3 pl-3 outline-none shadow-inner shadow-gray-400  duation-200 my-2"
              onChange={handleRePass}
            />
            <button className="bg-[#dc4734] text-white border-2 hover:bg-white border-[#dc4734] hover:text-[#dc4734] py-2 px-2  duration-200 w-full">
              <input
                type="submit"
                value="Submit"
                className="text-[14px] font-bold"
              />
            </button>
          </form>
          {ertext !== null && (
            <p className="text-red-600 text-center font-bold">{ertext}</p>
          )}
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
        </div>

        {/* {user && `<p>${user?.emailVerified}</p>`} */}
        {/* {userType === 1 && registered === true && (
        <StudentRegistration></StudentRegistration>
      )}
      {userType === 2 &&
        registered === true(<TeacherRegistration></TeacherRegistration>)} */}
      </div>
      <Footer className=""></Footer>
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
