import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Modal from "../Modal/Modal";
const Demo = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user?.emailVerified) {
      navigate("/");
    } else if (!user) {
      console.log("user not registered");
      navigate("/login");
    } else {
      {
        signOut(auth);
        <Modal></Modal>;
        // alert("user didn't verify email");
        navigate("/login");
      }
    }
  }, []);

  return <div></div>;
};

export default Demo;
