import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import map from "./Map.PNG";
import { HashLink } from "react-router-hash-link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo1 from "../../images/mainlogo.png";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import ToastComponent from "../Shared/ToastComponent/ToastComponent";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
const LandingPage = () => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/user")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLoggedUser(data);
      });
  }, [loggedUser]);
  if (loading) {
    return <p>Waiting</p>;
  }

  let verifyError;
  if (user) {
    if (!user?.emailVerified) {
      verifyError = (
        <div className="text-red-500 text-xl font-medium text-center">
          <h3>Verification mail has been sent. Verify to continue...</h3>
        </div>
      );
    }
  } else {
    verifyError = <div></div>;
  }
  if (user?.emailVerified) {
    navigate("/home");
  }

  return (
    <div className="relative">
      <div className="fixed bottom-5 right-5">
        <div className=" flex space-x-2 items-center">
          <div className="text-base text-black font-medium  font-serif hover:scale-110 duration-200 px-3">
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </div>
          <div className="text-base text-black font-medium  font-serif hover:scale-110 duration-200 px-3">
            <HashLink smooth to="/#location">
              Location
            </HashLink>
          </div>
          <div className="text-base text-black font-medium  font-serif hover:scale-110 duration-200 px-3">
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </div>
        </div>
      </div>
      <div className="">
        {verifyError}
        {/* headerpart */}
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
        </div>
        {/* Body part */}
        <div>
          {/* carosel part */}
          <div className=" bg-white ">
            <Carousel
              autoPlay
              infiniteLoop
              interval={5000}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img
                  className="w-full h-[550px] md:h-[550px] object-cover"
                  src="https://www.lus.ac.bd/wp-content/uploads/2020/03/1111111-745x385.jpg
"
                />
              </div>
              <div>
                <img
                  className="w-full h-[550px] md:h-[550px] object-cover"
                  src="
https://www.lus.ac.bd/wp-content/uploads/2019/07/3-745x385.jpg"
                />
              </div>
              <div>
                <img
                  className="w-full h-[550px] md:h-[550px] object-cover"
                  src="https://www.lus.ac.bd/wp-content/uploads/2022/03/received_383356339963226-745x385.jpeg"
                />
              </div>
              <div>
                <img
                  className="w-full h-[550px] md:h-[550px] object-cover"
                  src="https://www.lus.ac.bd/wp-content/uploads/2022/03/received_991091338468482-745x385.jpeg"
                />
              </div>
            </Carousel>
          </div>
          {/* About website */}
          <div className="bg-slate-100 w-full py-5 mx-auto" id="about">
            {/* hero part */}
            <div className="w-5/6 mx-auto">
              <div className="hero py-5 ">
                <div className="hero-content flex-col lg:flex-row ">
                  <img
                    src={logo1}
                    className="max-w-sm rounded-lg shadow-2xl mr-5"
                  />
                  <div>
                    <h1 className="text-5xl font-bold">
                      One and all social site for you
                    </h1>
                    <p className="py-6">
                      We provide a soothing experienec for all users whether
                      they are students or teachers. We provide post for
                      individual Departments, Teachers and also for students
                    </p>
                    <button className="w-32 bg-blue-500 text-white p-3 font-medium tracking-wider rounded-sm hover:bg-[#0cabc7] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                      <Link to="/register">Explore</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* features card */}
          <div className="w-full mx-auto  py-5 ">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-medium  my-5 text-gray-500">
                Website Features
              </h3>
            </div>
            <div className="divider my-8"></div>
            <div className="w-5/6 mx-auto">
              <div className="flex flex-row flex-wrap justify-center  gap-x-10 gap-y-2">
                <div className="w-[400px] bg-gray-100 rounded-md my-10 p-10">
                  <h3 className=" py-2 text-center text-blue-400 text-2xl font-semibold">
                    User Post Feed
                  </h3>
                  <p className="text-center text-black text-lg px-4">
                    A place for user's to share about events or query's. Here
                    both users , students and teachers can post importent
                    notices
                  </p>
                </div>
                <div className="w-[400px] bg-gray-100 rounded-md my-10 p-10">
                  <h3 className=" py-2 text-center text-blue-400 text-2xl font-semibold">
                    Department Post Feed
                  </h3>
                  <p className="text-center text-black text-lg px-4">
                    A place for user's to view about events or query's relating
                    to their individual departments. <br />
                    Here teachers can post importent notices
                  </p>
                </div>
                <div className="w-[400px] bg-gray-100 rounded-md my-10 p-10">
                  <h3 className=" py-2 text-center text-blue-400 text-2xl font-semibold">
                    Univertiy post feed
                  </h3>
                  <p className="text-center text-black text-lg px-4">
                    A place for user's to view events conducted by the
                    university.
                  </p>
                </div>
                <div className="w-[400px] bg-gray-100 rounded-md my-10 p-10">
                  <h3 className=" py-2 text-center text-blue-400 text-2xl font-semibold">
                    Teacher Post Feed
                  </h3>
                  <p className="text-center text-black text-lg px-4">
                    A place for students's to see about post done by individual
                    teachers. Here, teachers can post importent notices
                  </p>
                </div>
                <div className="w-[400px] bg-gray-100 rounded-md my-10 p-10">
                  <h3 className=" py-2 text-center text-blue-400 text-2xl font-semibold">
                    Student to Teacher Chat System
                  </h3>
                  <p className="text-center text-black text-lg px-4">
                    Student's no longer need third-party applications to contact
                    as they can directly message their teachers through our chat
                    system.
                  </p>
                </div>
                <div className="w-[400px] bg-gray-100 rounded-md my-10 p-10">
                  <h3 className=" py-2 text-center text-blue-400 text-2xl font-semibold">
                    Bus Booking System
                  </h3>
                  <p className="text-center text-black text-lg px-4">
                    Student's no longer need to face hassle of using the bus
                    transport system as they can easily book their bus using our
                    website.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* location */}
          <div className="py-10 bg-slate-100" id="location">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-medium  text-gray-500">
                Campus Location
              </h3>
            </div>
            <div className="divider my-8"></div>
            <img src={map} alt="location" className="mx-auto" />
          </div>
          {/* contact form */}
          <div className="bg-white py-5" id="contact">
            <p className="text-center text-2xl lg:text-3xl font-medium  my-5 text-gray-500">
              Contact Us
            </p>
            <div className="divider pt-5"></div>
            {/* <hr className="w-20 mx-auto mb-10 border-black" /> */}
            <div className="flex flex-col items-center justify-center mt-8 mb-10">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 mb-4 md:mb-6">
                <input
                  className="w-80 border-2 rounded p-2 border-[#0eadc9] md:mr-6"
                  type="name"
                  placeholder="Name"
                />
                <input
                  className="w-80 border-2 rounded p-2 border-[#0eadc9] "
                  type="email"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="w-80 md:w-[664px] h-32 border-2 rounded p-2 border-[#0eadc9] mb-6"
                name=""
                placeholder="Your Message"
              ></textarea>
              <button className="w-52 bg-blue-500 text-white p-3 font-medium tracking-wider rounded-sm hover:bg-[#0cabc7] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer limit={1} />
      <Footer className=""></Footer>
    </div>
  );
};

export default LandingPage;
