import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const useCommenter = (commenter) => {
  const [commentLoading, setCommentLoading] = useState(true);
  const [commenterInfo, setCommenterInfo] = useState({});
  const [admin, setAdmin] = useState(false);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:9000/users/${commenter}`)
      .then((res) => res.json())
      .then((data) => {
        setCommenterInfo(data);
        setCommentLoading(false);
      });
    if (user) {
      const checkreg = /^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(
        user?.email
      );

      if (!checkreg) {
        // setAdmin(true);
        setAdmin(!admin);
        // console.log("from use Admin, admin after: ", admin);
      }
    }
  }, []);
  return [commenterInfo, commentLoading, admin];
};

export default useCommenter;
