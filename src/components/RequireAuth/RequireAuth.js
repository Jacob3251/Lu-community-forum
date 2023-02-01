import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Puff } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase.init";
const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // console.log("from require auth 88888888888", user);
  if (loading) {
    return (
      <div className="h-[90vh] w-full flex flex-col justify-center items-center">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#3c2317"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
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
