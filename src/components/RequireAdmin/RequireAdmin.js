import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAdmin from "../../hooks/useAdmin";
import { useEffect } from "react";
const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin();
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  if (!admin || !user) {
    signOut(auth);
    console.log("signed out from require admin");

    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
