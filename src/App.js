import WelcomePage from "./components/WelcomePage/WelcomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Dept from "./components/Dept/Dept";
import Transport from "./components/Transport/Transport";
import Library from "./components/Library/Library";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import LandingPage from "./components/LandingPage/LandingPage";
import { auth } from "./firebase.init";
import Demo from "./components/Demo/Demo";
import { AnimatePresence } from "framer-motion";
import ForgotEmail from "./components/ForgotEmail/ForgotEmail";
import { useState } from "react";
import { setLogLevel } from "firebase/app";
import NotFound from "./components/NotFound/NotFound";
import RequireAdmin from "./components/RequireAdmin/RequireAdmin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import UniversityPostManager from "./components/AdminDashboard/UniversityPostManager";
import Header from "./components/Shared/Header/Header";
import SingleImage from "./components/ImageBox/SingleImage";
import Gallery from "./components/Gallery/Gallery";
import CareerBlogs from "./components/CareerBlogs/CareerBlogs";
import Research from "./components/Research/Research";
import Alumni from "./components/Alumni/Alumni";
import IndividualProfile from "./components/Profile/IndividualProfile";
import CoverPictureView from "./components/Profile/CoverPictureView";
import ProfilePictureView from "./components/Profile/ProfilePictureView";
import Login from "./components/Login/Login";
function App() {
  const [user] = useAuthState(auth);
  const location = useLocation();

  return (
    // inside routes }
    <div className="App bg-[#f1f1f1]">
      <Header className=""></Header>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
            // )
          }
        ></Route>

        <Route
          path="/dept"
          element={
            <RequireAuth>
              <Dept></Dept>
            </RequireAuth>
          }
        ></Route>

        <Route path="/transport" element={<Transport></Transport>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/userProfile/:id"
          element={<IndividualProfile></IndividualProfile>}
        ></Route>
        {/* <Route
            path="/careerblogs"
            element={<CareerBlogs></CareerBlogs>}
          ></Route> */}
        {/* <Route path="/research" element={<Research></Research>}></Route> */}
        {/* <Route path="/library" element={<Library></Library>}></Route> */}
        <Route path="/alumni" element={<Alumni></Alumni>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route
          path="/profile-cover/coverpic"
          element={<CoverPictureView></CoverPictureView>}
        ></Route>
        <Route
          path="/profile-cover/profilepic"
          element={<ProfilePictureView></ProfilePictureView>}
        ></Route>
        {/* <Route path="/blogs" element={<Profile></Profile>}></Route> */}
        <Route
          path="/:imageId"
          element={
            <RequireAuth>
              <SingleImage></SingleImage>
            </RequireAuth>
          }
        ></Route>
        <Route path="/demo" element={<Demo></Demo>}></Route>
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminDashboard></AdminDashboard>
            </RequireAdmin>
          }
        ></Route>
        <Route
          path="/forgotemail"
          element={<ForgotEmail></ForgotEmail>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
