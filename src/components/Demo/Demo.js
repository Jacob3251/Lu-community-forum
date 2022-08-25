import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Demo = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleVerification = () => {
    // console.log(user, "email verified: ", user.emailVerified);
    if (user?.emailVerified) {
      navigate("/");
    } else if (!user) {
      navigate("/login");
    } else {
      signOut(auth);
      navigate("/login");
    }
  };
  return (
    <div>
      <button className="btn" onClick={handleVerification}>
        Verify Email
      </button>
    </div>
  );
};

export default Demo;
