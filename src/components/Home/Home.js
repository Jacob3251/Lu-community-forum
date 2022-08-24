import { getAuth } from "firebase/auth";
import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../Header/Header";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-4/5 mx-auto mt-10">
      {/* <Header></Header> */}
      <Header></Header>
      <h1>This is home </h1>
      {console.log(user)}
    </div>
  );
};

export default Home;
