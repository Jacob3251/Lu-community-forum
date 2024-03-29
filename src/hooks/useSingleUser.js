import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const useSingleUser = (email) => {
  const [profile, setProfile] = useState({});
  const [profileLoading, setProfileLoading] = useState(true);
  // const [user, loading] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://lu-community-forum-backend.up.railway.app/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setProfileLoading(false);
      });
  }, [email]);
  return [profile, profileLoading];
};

export default useSingleUser;
