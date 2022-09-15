import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../Header/Header";
import PostBox from "../PostBox/PostBox";
import Loader from "../Loader/Loader";
import { HashLink } from "react-router-hash-link";
import CreatePost from "../CreatePost/CreatePost";
import { Link } from "react-router-dom";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
const Home = () => {
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/generalposts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts]);
  return (
    <div className=" lg:w-full mx-auto ">
      {/* <Header></Header> */}
      <div className="sticky top-0 z-10">
        {/* <Header></Header> */}
        <div className="w-full bg-blue-500 flex justify-between items-center py-3 px-5">
          {/* header left side */}
          <div className="flex items-center">
            {/* <div>
              <img src={logo} alt="Varsity logo" className="w-10 h-10" />
            </div> */}
            <div className="text-lg text-white font-semibold ml-2">
              LU Community Forum
            </div>
          </div>
          {/* header Links right side */}
          <div className="flex space-x-2 items-center">
            <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
              <Link to="/home">Homepage</Link>
            </div>
            <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
              <Link to="/dept">Department</Link>
            </div>
            <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
              <Link to="/library">Library</Link>
            </div>
            <div className="text-base font-medium text-white font-serif p-1 rounded-lg">
              <Link to="/transport">Transport</Link>
            </div>
            <div className="text-base text-white font-medium  font-serif p-1 rounded-lg">
              <ProfileSideMenu></ProfileSideMenu>
            </div>
          </div>
        </div>
      </div>
      {/* body part */}
      <div className="w-5/6 mx-auto">
        <CreatePost></CreatePost>

        {posts.map((u) => (
          <PostBox
            title={u.title}
            content={u.content}
            postId={u._id}
            key={u._id}
            email={u.email}
          ></PostBox>
        ))}
      </div>
      {console.log(user)}
      <Loader></Loader>
      <Footer></Footer>
    </div>
  );
};

export default Home;
