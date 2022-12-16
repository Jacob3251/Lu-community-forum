import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useUniversityPost from "../../hooks/useUniversityPost";

const TeacherPostManager = () => {
  const postInput = useRef();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((data) => {
        const teacherProfile = data[1].find((p) => p.email === email);
        console.log(teacherProfile);
        setProfile(teacherProfile);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = postInput.current[0].value;
    const content = postInput.current[1].value;
    const type = postInput.current[2].value;

    const postObject = {
      title: title,
      name: profile.name,
      dept: profile.dept,
      content: content,
      email: email,
      type: type,
      postType: 2,
    };
    fetch("http://localhost:9000/selectedpost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(postObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
      });
  };
  //   const [post] = useUniversityPost();
  return (
    <div>
      <form onSubmit={handleSubmit} ref={postInput}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="content" placeholder="content" />
        <input type="text" name="type" placeholder="type" />
        <input type="submit" value="Submit" />
      </form>
      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default TeacherPostManager;
