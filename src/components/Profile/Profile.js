import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Profile = () => {
  const [userArray, setUserArray] = useState([]);
  const [profile, setProfile] = useState({});
  const [user] = useAuthState(auth);
  const email = user?.email;
  // console.log(userArray[1]);
  const emailreg = /^(cse|eee|ce|eng)[_]\d{10}[@]lus[.]ac[.]bd$/.test(email);

  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((data) => {
        if (emailreg) {
          const studentProfile = data[0].find((p) => p.email === email);
          console.log(studentProfile);
          setProfile(studentProfile);
        }
      });
  }, []);
  return (
    <div className=" w-4/5 mx-auto py-10">
      <Header></Header>
      <div className="h-[500px] bg-slate-200 my-5 rounded-lg flex ">
        <div className="flex flex-col justify-content items-center  w-1/4 py-10">
          <img
            className="rounded-2xl"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h3 className="mt-8 text-xl font-medium">{profile.name}</h3>
        </div>
        <div className=" w-3/4 relative">
          <div className="h-4/5  w-4/5 mx-auto p-10">
            <div className="">
              <h3 className="mb-3 text-lg font-medium">Name: {profile.name}</h3>
              <h3 className="mb-3 text-lg font-medium">
                Student ID: {profile.studentID}
              </h3>
              <h3 className="mb-3 text-lg font-medium">
                Department: {profile.dept}
              </h3>
              <h3 className="mb-3 text-lg font-medium">
                Email: {profile.email}
              </h3>
              <h3 className="mb-3 text-lg font-medium">
                Phone Number: {profile.phoneNumber}
              </h3>
              <h3 className="mb-3 text-lg font-medium">
                Batch: {profile.batchNumber}
              </h3>
              <h3 className="mb-3 text-lg font-medium">
                Address: {profile.address}
              </h3>
              <h3 className="mb-3 text-lg font-medium">
                BloodGroup: {profile.bloodGroup}
              </h3>
            </div>
          </div>
          <PencilSquareIcon className="h-10 w-10 text-blue-500 fixed bottom-10 right-12 absolute hover:bg-slate-100 p-[3px] bg-slate-300 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
