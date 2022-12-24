import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useSingleUser = (email) => {
  const [profile, setProfile] = useState({});
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:9000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [email]);
  return [profile];
};

export default useSingleUser;
