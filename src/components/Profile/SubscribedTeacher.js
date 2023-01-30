import React from "react";

const SubscribedTeacher = ({ info }) => {
  const { id, photoURL, name, designation } = info;
  return (
    <div
      // onClick={() => handleSelected(id)}
      className={`flex flex-col rounded-lg justify-center items-center bg-white scale-90 hover:scale-100 duration-200`}
    >
      <img className="w-[80%] h-[60%] mx-auto" alt="img" src={photoURL}></img>
      <h3 className="text-center text-md font-bold ">{name}</h3>
      <h5 className="text-center text-sm"> {designation}</h5>
    </div>
  );
};

export default SubscribedTeacher;
