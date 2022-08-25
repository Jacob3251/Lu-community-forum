import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
const StudentRegistration = ({ email, password }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const handleFormSubmit = () => {
    createUserWithEmailAndPassword(email, password).then(async () => {
      await sendEmailVerification().then(() => {
        let userlog = window.confirm("Verify your email and login in");
        if (userlog) {
          navigate("/login");
        }
      });
    });
    console.log("working fine");
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select your username</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your Student ID</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your Batch Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your Phone Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select your BloodGroup</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your address</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Write your password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Confirm your Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="btn" onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudentRegistration;
