import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const useSingleUserAllPost = (email) => {
  const [allSinglePost, setAllSinglePost] = useState([]);
  const [user] = useAuthState(auth);
  const [postLoading, setPostLoading] = useState(true);
  // if(loading)
  useEffect(() => {
    fetch(`http://localhost:9000/allSingleUserPost/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllSinglePost(data);
        setPostLoading(false);
      });
  }, [allSinglePost]);
  return { allSinglePost, postLoading };
};

export default useSingleUserAllPost;
