import { useState, useEffect } from "react";

const usePost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://lu-community-forum-backend.up.railway.app/generalposts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [posts, posts.comments]);

  return [posts];
};

export default usePost;
