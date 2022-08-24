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
import auth from "../../firebase.init";
import Header from "../Header/Header";

const Register = () => {
  const [userType, setUserType] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [registered, setRegistered] = useState(false);

  const [ertext, setErtext] = useState("");
  const handleEmail = (e) => {
    const useremail = e.target.value;
    const emailreg = /@lus.ac.bd/.test(useremail)
      ? (setEmail(useremail), setErtext(""))
      : (setErtext("Please put correct values"),
        setEmail(""),
        console.log("wrongpass"));
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
      setErtext("Please put correct password");
    }
  };
  // Firebase Email Pass user creation below--
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  // const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const handleEmailVerification = () => {
    createUserWithEmailAndPassword(email, pass).then(setRegistered(true));
    console.log("working fine");
  };

  // Send Email verification

  return (
    <div className="w-4/5 mx-auto mt-10">
      <Header></Header>
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
      <div className="flex my-4">
        <input
          type="text"
          placeholder="Enter university email"
          className="input input-bordered w-full max-w-xs mr-2"
          onBlur={handleEmail}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="input input-bordered w-full max-w-xs mr-2"
          onBlur={handlePass}
        />
        <input
          type="password"
          placeholder="Type password again"
          className="input input-bordered w-full max-w-xs"
          onChange={handleRePass}
        />
        <div className="ml-5">
          <button className="btn" onClick={handleEmailVerification}>
            Submit
          </button>
          <button
            className="btn"
            onClick={() => {
              console.log(user);
              // window.location.reload();
            }}
          >
            See user
          </button>
        </div>
      </div>
      {ertext !== null && <p>{ertext}</p>}
      {user && `<p>${user?.email}</p>`}
      {/* Email validation done */}
      {user && `<p>${user?.emailVerified}</p>`}
      {userType === 1 && registered === true && (
        <StudentRegistration></StudentRegistration>
      )}
      {userType === 2 && registered === true && (
        <TeacherRegistration></TeacherRegistration>
      )}
    </div>
  );
};

export default Register;
