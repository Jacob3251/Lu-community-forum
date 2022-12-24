import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const mail = user?.email;
  // const [admin] = useAdmin(mail, loading);
  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  if (!user) {
    // alert("Not registered");
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  if (mail) {
    const checkreg = /^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(mail);
    // console.log("from use Admin, admin before: ", admin);
    if (checkreg) {
      // setAdmin(true);
      signOut(auth);
      console.log("signed out from require admin");

      return <Navigate to="/" state={{ from: location }} replace></Navigate>;
      // console.log("from use Admin, admin after: ", admin);
    }
  }
  return children;
};

export default RequireAdmin;
