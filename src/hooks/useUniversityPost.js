import { useState } from "react";
import { useEffect } from "react";

const useUniversityPost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/selectedpost")
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
