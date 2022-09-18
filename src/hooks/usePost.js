import { useState, useEffect } from "react";

const usePost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-plateau-06322.herokuapp.com/generalposts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts]);
  return [posts];
};

export default usePost;
