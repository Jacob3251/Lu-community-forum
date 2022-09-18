import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useUniversityPost from "../../hooks/useUniversityPost";

const DepartmentPostManager = () => {
  const postInput = useRef();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch("https://cryptic-plateau-06322.herokuapp.com/users")
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
      dept: postInput.current[3].value,
      content: content,
      email: email,
      type: type,
      postType: 1,
    };
    console.log();
    fetch("https://cryptic-plateau-06322.herokuapp.com/selectedpost", {
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
  return (
    <div>
      <form onSubmit={handleSubmit} ref={postInput}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="content" placeholder="content" />
        <input type="text" name="type" placeholder="type" />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick your Department</span>
          </label>
          <select className="select select-bordered">
            <option value="not">Select Department</option>
            <option value="cse">Computer Science</option>
            <option value="eee">Electrical Engineering</option>
            <option value="ce">Civil Engineering</option>
            <option value="ee">English</option>
            <option value="arch">Architecture</option>
            <option value="bba">Business Administration</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
      {/* <button onClick={handleSubmit}>Add post university</button> */}
    </div>
  );
};

export default DepartmentPostManager;
