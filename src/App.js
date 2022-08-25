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

import auth from "./firebase.init";
import Demo from "./components/Demo/Demo";
import { AnimatePresence } from "framer-motion";
function App() {
  const [user] = useAuthState(auth);
  // console.log(user);
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              // <Home></Home>
              user ? (
                <Home></Home>
              ) : (
                <RequireAuth>
                  <Home></Home>
                </RequireAuth>
              )
            }
          ></Route>

          <Route path="/login" element={<WelcomePage></WelcomePage>}></Route>
          {/* <Route path="/dept" element={<Dept></Dept>}></Route> */}
          <Route
            path="/dept"
            element={
              // <Home></Home>
              user ? (
                <Dept></Dept>
              ) : (
                <RequireAuth>
                  <Dept></Dept>
                </RequireAuth>
              )
            }
          ></Route>
          {/* <Route path="/transport" element={<Transport></Transport>}></Route> */}
          <Route
            path="/transport"
            element={
              // <Home></Home>
              user ? (
                <Transport></Transport>
              ) : (
                <RequireAuth>
                  <Transport></Transport>
                </RequireAuth>
              )
            }
          ></Route>
          <Route path="/library" element={<Library></Library>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/demo" element={<Demo></Demo>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
