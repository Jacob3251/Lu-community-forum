import { getAuth } from "firebase/auth";
import React from "react";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth(app);
const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>This is home </h1>
      {console.log(user)}
    </div>
  );
};

export default Home;
