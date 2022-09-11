import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
import useAdmin from "../../hooks/useAdmin";
const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, isAdminLoading] = useAdmin(user);
  const location = useLocation();
  //   spinner causing trouble problem solved using firebase loading rather than isadminLoadingstate
  //   console.log("from require auth before spinner :", isAdminLoading);
  if (loading) {
    return (
      <>
        <div className="mt-10"></div>
        <Spinner></Spinner>
      </>
    );
  }
  //   console.log("from require auth after spinner :", isAdminLoading);
  if (!admin) {
    console.log("from require admin: ", admin);
    return <Navigate to="/home" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
