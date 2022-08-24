import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../Header/Header";

const Dept = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-4/5 mx-auto mt-10">
      <Header></Header>
      <h1>this is dept route</h1>
    </div>
  );
};

export default Dept;
