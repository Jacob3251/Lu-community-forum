import React, { useState } from "react";
import { auth } from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const TeacherRegistration = ({ email, password, userType }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [teacherID, setTeacherID] = useState("");
  const [bloodGrp, setBloodGrp] = useState("");
  const [designation, setDesignation] = useState("");
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
  const handleTeacherID = (e) => {
    setTeacherID(e.target.value);
  };
  const handleDesignation = (e) => {
    setDesignation(e.target.value);
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
      teacherID: teacherID,
      designation: designation,
      dept: deptSelect,
      userType: userType,
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

              event.target.reset();
            });
          navigate("/");
        }
      });
    });
    console.log("created user: ", userObject);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="py-10 text-[14px] text-[#36454f]"
    >
      <div className="grid grid-cols-1 place-items-center place-content-center md:grid-cols-3 gap-5 ">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select your username</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onBlur={handleUsername}
            className="input rounded-none w-full max-w-xs shadow-inner shadow-gray-400"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your Teacher ID</span>
          </label>
          <input
            type="text"
            onBlur={handleTeacherID}
            placeholder="Type here"
            className="input rounded-none w-full max-w-xs shadow-inner shadow-gray-400"
          />
        </div>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Pick your Designation</span>
            </label>
            <select
              onChange={handleDesignation}
              className="select rounded-none"
            >
              <option value="not">Select designation</option>
              <option value="Professor">Professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Asociate Professor">Asociate Professor</option>
              <option value="Senior Lecturer">Senior Lecturer</option>
              <option value="Lecturer">Lecturer</option>
              <option value="Adjunct Faculty">Adjunct Faculty</option>
            </select>
          </div>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your Phone Number</span>
          </label>
          <input
            type="number"
            onBlur={handlePhoneNumber}
            placeholder="Type here"
            className="input rounded-none w-full max-w-xs shadow-inner shadow-gray-400"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select your BloodGroup</span>
          </label>
          <input
            type="text"
            onBlur={handleBloodGrp}
            placeholder="Type here"
            className="input rounded-none w-full max-w-xs shadow-inner shadow-gray-400"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your address</span>
          </label>
          <input
            type="text"
            onBlur={handleAddress}
            placeholder="Type here"
            className="input rounded-none w-full max-w-xs shadow-inner shadow-gray-400"
          />
        </div>
        {/* Dept dropdown */}
        <div>
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
      </div>

      <div className="text-center mt-10">
        <button className="bg-[#dc4734] text-white py-2 px-2 w-full duration-200 hover:bg-white hover:text-[#dc4734] border-2 border-[#dc4734]">
          <input
            type="submit"
            value="Submit Form"
            className="text-[14px] font-bold"
          />
        </button>
      </div>
    </form>
  );
};

export default TeacherRegistration;
