import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { storage } from "../../firebase.init";
import { FaTrashAlt } from "react-icons/fa";
const AlumniPostManager = () => {
  const [pictureFile, setPictureFile] = useState(null);
  const [imglinkPic, setimglinkPic] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [alumniData, setAlumniData] = useState([]);
  const [imglinkPicUploadStatus, setimglinkPicUploadStatus] = useState(false);
  const uploadalumnifileInFirebase = () => {
    // console.log(profile);
    if (pictureFile == null) return;
    console.log("func ran");
    const fileRef = ref(
      storage,
      `alumniPictureImages/${pictureFile.name + v4()}`
    ); //folder in firebase storage for uploded image
    uploadBytes(fileRef, pictureFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        alert("img added");
        setimglinkPic(url);
        setimglinkPicUploadStatus(true);
      });
    });
  };
  const handleAlumniUpload = (e) => {
    e.preventDefault();
    console.log("alu");
    const alumniObj = {
      name: name,
      position: position,
      description: description,
      imgLink: imglinkPic,
    };
    console.log(alumniObj);

    fetch("http://localhost:9000/alumnipost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(alumniObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setName("");
        setPosition("");
        setDescription("");
        setimglinkPic("");
        window.location.reload();
      });
  };
  const handleAlumniDelete = (id) => {
    const permission = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (permission) {
      fetch(`http://localhost:9000/alumnipost/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => alert("Alumni Post Deleted"));
    }
  };
  useEffect(() => {
    fetch("http://localhost:9000/alumnipost")
      .then((res) => res.json())
      .then((data) => setAlumniData(data));
  }, [alumniData]);
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-center items-start mt-5 lg:mt-0 ">
      <div className="bg-white px-5 py-3 w-full flex text-[#36454f] flex-col justify-center items-center shadow-md shadow-gray-500 hover:drop-shadow-md">
        <h3 className="text-center my-4 font-bold text-[14px]">
          Alumni Post Submission
        </h3>
        <input
          type="text"
          required
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="w-full my-2  shadow-inner shadow-gray-300 placeholder:text-gray-500 placeholder:text-[12px] py-3 pl-3 mx-auto"
          placeholder="Enter name..."
        />
        <input
          type="text"
          required
          name="position"
          onChange={(e) => setPosition(e.target.value)}
          className="w-full my-2  shadow-inner shadow-gray-300 placeholder:text-gray-500 placeholder:text-[12px] py-3 pl-3 mx-auto"
          placeholder="Enter position..."
        />
        <input
          type="text"
          required
          name="desc"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full my-2  shadow-inner shadow-gray-300 placeholder:text-gray-500 placeholder:text-[12px] py-3 pl-3 mx-auto"
          placeholder="Enter description"
        />
        <div className="flex flex-col lg:flex-row w-full justify-center items-center py-3 px-5">
          <input
            required
            type="file"
            onChange={(e) => setPictureFile(e.target.files[0])}
            className="w-full lg:w-3/4 text-[14px]"
            // style={{ visibility: "hidden" }}
          />
          <button
            onClick={uploadalumnifileInFirebase}
            disabled={imglinkPicUploadStatus ? true : false}
            className={`w-full lg:w-1/4 bg-[#f1f1f1] font-bold  my-3 text-[12px] py-2  duration-200 text-blue-400`}
          >
            {imglinkPic !== "" ? "Uploaded" : "Upload Picture"}
          </button>
        </div>
        <button
          onClick={handleAlumniUpload}
          disabled={!imglinkPicUploadStatus ? true : false}
          className="py-2 my-3 w-full font-bold text-[14px]   duration-200 px-3 border-2 border-[#dc4734] bg-[#dc4734] hover:bg-white text-white hover:text-[#dc4734]"
        >
          SUBMIT
        </button>
      </div>
      <div className="mr-2 w-full mt-5 lg:mt-0">
        {alumniData.map((data) => (
          <div className="bg-white shadow-md shadow-gray-400 hover:drop-shadow-md flex justify-between items-center text-[14px] text-[#36454f] mb-5 px-4 ">
            <div className=" flex space-x-5 items-center py-2">
              <div className="avatar">
                <div className=" w-12 rounded-full">
                  <img src={data.imgLink} alt="" />
                </div>
              </div>
              <div>
                <h4 className="font-bold">{data.name}</h4>
              </div>
              <div>
                <h4>
                  Position: <span className="font-bold">{data.position}</span>
                </h4>
              </div>
            </div>
            <div
              onClick={() => handleAlumniDelete(data._id)}
              className="text-[18px] hover:text-[#dc4734] rounded-full border-2 p-2 border-white hover:border-[#dc4734]"
            >
              <FaTrashAlt />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniPostManager;
