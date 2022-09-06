import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../Header/Header";
import PostBox from "../PostBox/PostBox";
import Loader from "../Loader/Loader";
import CreatePost from "../CreatePost/CreatePost";
const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="w-5/6 lg:w-full mx-auto  lg:mt-10">
      {/* <Header></Header> */}
      <div className="sticky top-0 z-10">
        <Header></Header>
      </div>
      <CreatePost></CreatePost>

      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      <PostBox></PostBox>
      {console.log(user)}
      <Loader></Loader>
    </div>
  );
};

export default Home;
