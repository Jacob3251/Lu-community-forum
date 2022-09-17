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
import auth from "./firebase.init";
import Demo from "./components/Demo/Demo";
import { AnimatePresence } from "framer-motion";
import ForgotEmail from "./components/ForgotEmail/ForgotEmail";
import { useState } from "react";
import { setLogLevel } from "firebase/app";
import NotFound from "./components/NotFound/NotFound";
import RequireAdmin from "./components/RequireAdmin/RequireAdmin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import UniversityPostManager from "./components/AdminDashboard/UniversityPostManager";
function App() {
  const [user] = useAuthState(auth);
  const location = useLocation();
  // console.log("from app js", user?.emailVerified);
  // console.log(user);
  // const [log, setLog] = useState(false);
  // if (user?.emailVerified) {
  //   setLog(true);
  // }

  return (
    // inside routes }
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route
            path="/home"
            element={
              // !user?.emailVerified ? (
              //   <Home></Home>
              // ) : (
              <Home></Home>
              // <RequireAuth>
              //   <Home></Home>
              // </RequireAuth>
              // )
            }
          ></Route>

          {/* <Route path="/login" element={<WelcomePage></WelcomePage>}></Route> */}
          {/* <Route path="/dept" element={<Dept></Dept>}></Route> */}
          <Route
            path="/dept"
            element={
              <Dept></Dept>
              // <Home></Home>
              // user ? (
              //   <Dept></Dept>
              // ) : (
              //   <RequireAuth>
              //     <Dept></Dept>
              //   </RequireAuth>
              // )
            }
          ></Route>
          {/* <Route path="/transport" element={<Transport></Transport>}></Route> */}
          <Route
            path="/transport"
            element={
              <Transport></Transport>
              // user ? (
              //   <Transport></Transport>
              // ) : (
              //   <RequireAuth>
              //     <Transport></Transport>
              //   </RequireAuth>
              // )
            }
          ></Route>
          <Route path="/library" element={<Library></Library>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/demo" element={<Demo></Demo>}></Route>
          <Route
            path="/admin"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
          <Route
            path="/forgotemail"
            element={<ForgotEmail></ForgotEmail>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
