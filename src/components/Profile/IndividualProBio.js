import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
const IndividualProBio = ({ profile, classes, subscribedData }) => {
  const [updater, setUpdater] = useState(false);
  const [bio, setBio] = useState("");
  console.log(subscribedData);
  const updateBio = (e) => {
    e.preventDefault();
    alert("ola");
    console.log(e.target.msg.value);
    setBio(e.target.msg.value);
    setUpdater(!updater);
  };
  return (
    <div>
      <div className={`${classes} relative`}>
        <h3 className="my-5 underline text-2xl font-bold text-white font-pacifico">
          About Me
        </h3>

        <p className="font-mono mb-5">{bio === "" ? "Update your bio" : bio}</p>
        {updater && (
          <button
            onClick={() => setUpdater(!updater)}
            className="rounded-full px-3 py-1 absolute -top-3 right-2 hover:scale-110 duration-200 text-lg font-bold hover:text-white bg-[#FFF5EE] hover:bg-red-500 "
          >
            X
          </button>
        )}
        {updater !== true ? (
          <button
            onClick={() => setUpdater(!updater)}
            className="bg-[#FFF5EE]  rounded-full text-3xl hover:bg-[#FFFFF0] hover:scale-110 duration-200 hover:text-black p-2 absolute bottom-[-18px] right-2"
          >
            <FaPencilAlt></FaPencilAlt>
          </button>
        ) : (
          <div></div>
        )}
        {updater && (
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
    </div>
  );
};

export default IndividualProBio;
