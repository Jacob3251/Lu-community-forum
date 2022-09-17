import { useState, useEffect } from "react";

const usePost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/generalposts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts]);
  return [posts];
};

export default usePost;
