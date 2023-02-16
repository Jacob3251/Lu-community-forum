import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
const StudentRegistration = ({ email, password, userType }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [studentID, setStudentID] = useState("");
  const [bloodGrp, setBloodGrp] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [deptSelect, setDeptSelect] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleStudentID = (e) => {
    setStudentID(e.target.value);
  };
  const handleBatchNumber = (e) => {
    setBatchNumber(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleBloodGrp = (e) => {
    setBloodGrp(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleDeptSelect = (e) => {
    console.log(e.target.value);
    setDeptSelect(e.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userObject = {
      name: userName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      bloodGroup: bloodGrp,
      studentID: studentID,
      batchNumber: batchNumber,
      dept: deptSelect,
      userType: userType,
      subscribedTeachers: [1, 2, 3],
    };

    createUserWithEmailAndPassword(email, password).then(async () => {
      await sendEmailVerification().then(() => {
        let userlog = window.confirm("Verify your email and login in");
        if (userlog) {
          // sending data to the server
          fetch("https://lu-community-forum-backend.up.railway.app/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userObject),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("success", data);
              // alert("user added successfully");

              event.target.reset();
            });
          navigate("/");
        }
      });
    });
    console.log("created user: ", userObject);
  };
  return (
    <form onSubmit={handleFormSubmit} className=" text-[14px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select your username</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onBlur={handleUsername}
            className="input w-full rounded-none max-w-xs outline-none shadow-inner shadow-gray-400"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your Student ID</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onBlur={handleStudentID}
            className="input rounded-none w-full max-w-xs outline-none shadow-inner shadow-gray-400"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your Batch Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onBlur={handleBatchNumber}
            className="input rounded-none w-full max-w-xs outline-none shadow-inner shadow-gray-400"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your Phone Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onBlur={handlePhoneNumber}
            className="input rounded-none w-full max-w-xs outline-none shadow-inner shadow-gray-400"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select your BloodGroup</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onBlur={handleBloodGrp}
            className="input rounded-none w-full max-w-xs outline-none shadow-inner shadow-gray-400"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your address</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onBlur={handleAddress}
            className="input rounded-none w-full max-w-xs outline-none shadow-inner shadow-gray-400"
          />
        </div>

        {/* dept dropdown */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick your Department</span>
          </label>
          <select className="select rounded-none" onChange={handleDeptSelect}>
            <option value="not">Select Department</option>
            <option value="cse">Computer Science</option>
            <option value="eee">Electrical Engineering</option>
            <option value="ce">Civil Engineering</option>
            <option value="ee">English</option>
            <option value="arch">Architecture</option>
            <option value="bba">Business Administration</option>
          </select>
        </div>
      </div>
      <div className="text-center pb-8 pt-4">
        <button className="bg-[#dc4734] text-white hover:text-[#dc4734] border-2 border-[#dc4734] w-full  py-2 px-2  duration-200 hover:bg-white text-[14px] font-bold">
          <input type="submit" value="Submit Form" />
        </button>
      </div>
    </form>
  );
};

export default StudentRegistration;
