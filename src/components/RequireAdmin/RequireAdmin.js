import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
import useAdmin from "../../hooks/useAdmin";
import { useEffect } from "react";
const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin();
  const location = useLocation();
  // const navigate = useNavigate();
  //   spinner causing trouble problem solved using firebase loading rather than isadminLoadingstate
  //   console.log("from require auth before spinner :", isAdminLoading);
  // if (loading) {
  //   return (
  //     <>
  //       <div className="mt-10"></div>
  //       <Spinner></Spinner>
  //     </>
  //   );
  // }
  if (!admin || !user) {
    signOut(auth);
    console.log("signed out from require admin");
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
