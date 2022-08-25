import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loader from "../Loader/Loader";

const Demo = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.emailVerified) {
      navigate("/");
    } else if (!user) {
      alert("User not registered");
      navigate("/login");
    } else {
      signOut(auth);
      alert("user didn't verify email");
      navigate("/login");
    }
  }, []);
  const handleVerification = () => {
    // console.log(user, "email verified: ", user.emailVerified);
  };
  return (
    <div>
      <Loader></Loader>
    </div>
  );
};

export default Demo;
