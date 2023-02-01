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
import { auth } from "../../firebase.init";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
// import ReactImageMagnify from "react-image-magnify";
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
  const footerClass = "";
  return (
    <div className="relative">
      <div className="fixed bottom-2 right-[13%] md:bottom-5 md:right-5 bg-[#628e90] rounded-3xl z-50 p-2 shadow-black shadow-md">
        <div className="flex flex-row justify-center space-x-2 items-center">
          <div className="text-base  rounded-xl hover:bg-[#3c2317] py-2 bg-white scale-95 hover:scale-100 hover:text-white text-[#3c2317]   font-bold  duration-200 px-3">
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </div>
          <div className="text-base  rounded-xl hover:bg-[#3c2317] py-2 bg-white scale-95 hover:scale-100 hover:text-white text-[#3c2317]  font-bold  duration-200 px-3">
            <HashLink smooth to="/#location">
              Location
            </HashLink>
          </div>
          <div className="text-base  rounded-xl hover:bg-[#3c2317] py-2 bg-white scale-95 hover:scale-100 hover:text-white text-[#3c2317]  font-bold  duration-200 px-3">
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </div>
        </div>
      </div>
      <div className="">
        {verifyError}

        {/* Body part */}
        <div>
          {/* carosel part */}
          <div className=" bg-white p-0">
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
                <div className="hero-content flex-col-reverse lg:flex-row ">
                  <img
                    src={logo1}
                    className="md:w-1/3 w-full rounded-lg shadow-2xl md:mr-5"
                  />
                  <div className="md:w-2/3">
                    <h1 className="text-3xl mt-10 md:mt-0 md:text-5xl font-bold">
                      One and all social site for you
                    </h1>
                    <p className="py-6">
                      We provide a soothing experienec for all users whether
                      they are students or teachers. We provide post for
                      individual Departments, Teachers and also for students
                    </p>
                    <button className="w-full md:w-1/4 my-2 py-3 bg-[#628e90] hover:bg-[#3c2317] text-white text-lg font-bold scale-95 hover:scale-100 duration-200 rounded-md">
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
              <h3 className="text-2xl lg:text-3xl font-bold my-2 md:my-5 text-[#3c2317]">
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
              <h3 className="text-2xl lg:text-3xl font-bold  my-2 md:my-5 text-[#3c2317]">
                Campus Location
              </h3>
            </div>
            <div className="divider my-8"></div>
            <div className="w-full ">
              <img src={map} className="w-full" alt="" />
            </div>
          </div>
          {/* contact form */}
          <div className="bg-white py-5" id="contact">
            <p className="text-2xl lg:text-3xl font-bold  my-2 md:my-5 text-[#3c2317] text-center">
              Contact Us
            </p>
            <div className="divider pt-5"></div>
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
              <button className="px-3 py-2 bg-[#628e90] hover:bg-[#3c2317] text-white text-lg font-bold scale-95 hover:scale-100 duration-200 rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer footerClass={footerClass}></Footer>
    </div>
  );
};

export default LandingPage;
