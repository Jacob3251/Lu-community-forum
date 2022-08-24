import WelcomePage from "./components/WelcomePage/WelcomePage";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home></Home>
            // user ? (
            //   <Home></Home>
            // ) : (
            //   <RequireAuth>
            //     <Home></Home>
            //   </RequireAuth>
            // )
          }
        ></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/dept" element={<Dept></Dept>}></Route>
        <Route path="/transport" element={<Transport></Transport>}></Route>
        <Route path="/library" element={<Library></Library>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
