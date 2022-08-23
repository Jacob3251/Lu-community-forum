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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<WelcomePage></WelcomePage>}></Route>
        <Route
          path="/dept"
          element={
            <RequireAuth>
              <Dept></Dept>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/transport"
          element={
            <RequireAuth>
              <Transport></Transport>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/library"
          element={
            <RequireAuth>
              <Library></Library>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile></Profile>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
