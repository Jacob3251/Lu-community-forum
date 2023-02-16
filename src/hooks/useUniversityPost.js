import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import useSingleUser from "./useSingleUser";

const useUniversityPost = () => {
  const [post, setPost] = useState([]);
  const [user] = useAuthState(auth);
  const profile = useSingleUser(user?.email);
  useEffect(() => {
    fetch(
      `https://lu-community-forum-backend.up.railway.app/selectedpost/${
        user?.email + "***" + profile[0]?.userType
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        // console.log(data[0].map((u) => u.newPostUniversity));
        setPost(data[0]);
      });
  }, [post]);
  return [post];
};
export default useUniversityPost;
