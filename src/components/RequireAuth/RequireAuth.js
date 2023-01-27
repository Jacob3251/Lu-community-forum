import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase.init";
const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // console.log("from require auth 88888888888", user);
  if (loading) {
    return (
      <p>
        Loading...
        <br />
        Please kindly wait
      </p>
    );
  }
  if (!user) {
    // alert("Not registered");
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  // else if (user === null) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }
  return children;
};

export default RequireAuth;
