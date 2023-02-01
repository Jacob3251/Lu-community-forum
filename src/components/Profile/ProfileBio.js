import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
import SubscribedTeacher from "./SubscribedTeacher";
const ProfileBio = ({ profile, classes, subscribedData }) => {
  const [updaterBio, setUpdaterBio] = useState(false);
  const [bio, setBio] = useState("");
  const [teacherDataLoader, setTeacherDataLoader] = useState(true);
  const [teacherData, setTeacherData] = useState({});

  // teacher subcription handled below
  const [selectedSubscribedTeacher, setSelectedSubscribedTeacher] = useState(
    []
  );
  // console.log(subscribedData);
  const updateBio = (e) => {
    e.preventDefault();
    setBio(e.target.msg.value);
    setUpdaterBio(!updaterBio);
    const newObj = {
      profileData: profile,
      bio: e.target.msg.value,
    };
    console.log("New Obj", newObj);
    fetch("http://localhost:9000/profilebio", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Succesfully updated bio", data);
        window.location.reload();
      });
  };

  const handleAddSelectedTeacher = (id) => {
    alert(id);
    const newObj = { selectedId: id };
    fetch(
      `http://localhost:9000/subscribedteachers/${
        profile.email + "***" + profile.userType
      }`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log("Success: ", data));
  };
  const handleSubtractSelectedTeacher = (id) => {
    alert(id);
    const newObj = { selectedId: id };
    fetch(
      `http://localhost:9000/subscribedteachersSub/${
        profile.email + "***" + profile.userType
      }`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log("Success: ", data));
  };
  useEffect(() => {
    fetch(
      `http://localhost:9000/subscribedteachers/${
        profile.email + "***" + profile.userType
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setTeacherData(data);
        setTeacherDataLoader(false);
      });
  }, [teacherData]);
  return (
    <div>
      <>
        {teacherDataLoader ? (
          <div>Loading</div>
        ) : (
          <>
            <div className={`${classes} relative`}>
              <h3 className="my-5  text-2xl font-bold text-white">About Me</h3>

              <p className="font-mono text-white mb-5">
                {profile.bio ? profile.bio : "Update your bio"}
              </p>
              {updaterBio && (
                <button
                  onClick={() => setUpdaterBio(!updaterBio)}
                  className="rounded-full px-3 py-1 absolute -top-3 right-2 hover:scale-110 duration-200 text-lg font-bold hover:text-white bg-[#FFF5EE] hover:bg-red-500 "
                >
                  X
                </button>
              )}
              {updaterBio !== true ? (
                <button
                  onClick={() => setUpdaterBio(!updaterBio)}
                  className="bg-[#FFF5EE]  rounded-full text-3xl hover:bg-[#FFFFF0] hover:scale-110 duration-200 hover:text-black p-2 absolute bottom-[-18px] right-2"
                >
                  <FaPencilAlt></FaPencilAlt>
                </button>
              ) : (
                <div></div>
              )}
              {updaterBio && (
                <form
                  className=" bg-gray-200 p-2 my-5 rounded-md"
                  onSubmit={updateBio}
                >
                  <input
                    required
                    className="w-full block py-2 pl-2 my-3 rounded-md"
                    type="text"
                    name="msg"
                    placeholder="Enter Bio"
                  />
                  <input
                    className="bg-[#00755E] hover:bg-[#FFFFF0] w-full  py-2 rounded-md px-5 font-bold border-0 hover:border-[2px] hover:drop-shadow-md border-white hover:border-[#628e90] hover:text-black text-[#FFFFF0] duration-75"
                    type="submit"
                    value={"Submit"}
                  />
                </form>
              )}
            </div>
            <div
              className={`${classes} mt-11 w-[80%] mx-auto font-mono text-white text-2xl font-bold hover:scale-105 duration-200 overflow-auto`}
            >
              <label
                htmlFor="my-modal1"
                className=" flex items-center justify-center  w-full text-lg"
              >
                <span className="">Update Subscription </span>
                <SlPencil className=" ml-3"></SlPencil>
              </label>
            </div>

            {/* Modal Start */}
            <input type="checkbox" id="my-modal1" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box bg-[#628e90]">
                {teacherData.status !== "Not applicable" ? (
                  <div className="relative">
                    <h3 className="text-center font-bold text-white text-2xl mt-5 mb-8">
                      Select Teachers
                    </h3>
                    <label
                      htmlFor="my-modal1"
                      className="absolute top-0 right-2 btn btn-circle btn-md"
                    >
                      X
                    </label>

                    {/* checkbox for dept */}

                    <h3 className="text-white font-semibold underline text-lg text-center my-3">
                      Not Selected Teachers
                    </h3>
                    <div className="grid grid-cols-2 gap-5  overflow-auto">
                      {teacherData?.notsubscribed.map((u) => (
                        <div
                          onClick={() => handleAddSelectedTeacher(u.id)}
                          key={u.id}
                          className={`flex flex-col rounded-lg justify-center items-center bg-white scale-90 hover:scale-100 duration-200`}
                        >
                          <img
                            className="w-[80%] h-[60%] mx-auto"
                            alt="img"
                            src={u.photoURL}
                          ></img>
                          <h3 className="text-center text-md font-bold ">
                            {u.name}
                          </h3>
                          <h5 className="text-center text-sm">
                            {" "}
                            {u.designation}
                          </h5>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-white font-semibold underline text-lg text-center my-3">
                      Selected Teachers
                    </h3>
                    <div className="grid grid-cols-2 gap-5  overflow-auto">
                      {teacherData?.subscribed.map((u) => (
                        <div
                          key={u.id}
                          onClick={() => handleSubtractSelectedTeacher(u.id)}
                          className={`flex flex-col rounded-lg justify-center items-center bg-white scale-90 hover:scale-100 duration-200`}
                        >
                          <img
                            className="w-[80%] h-[60%] mx-auto"
                            alt="img"
                            src={u.photoURL}
                          ></img>
                          <h3 className="text-center text-md font-bold ">
                            {u.name}
                          </h3>
                          <h5 className="text-center text-sm">
                            {" "}
                            {u.designation}
                          </h5>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {}}
                      className="w-full bg-slate-100 scale-95 hover:scale-100 duration-200 text-blue-300 hover:text-blue-500 hover:bg-slate-200 py-3 rounded-lg text-lg font-bold"
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="my-modal1"
                      className="absolute top-1 right-2 btn btn-circle btn-sm"
                    >
                      X
                    </label>
                    <h3 className="text-white text-center font-semibold text-lg">
                      No data meant to be shown!!
                      <br />
                      Have to be a student to subscribe!!!
                    </h3>
                  </div>
                )}
              </div>
            </div>
            {/* Modal End */}
          </>
        )}
      </>
    </div>
  );
};

export default ProfileBio;
