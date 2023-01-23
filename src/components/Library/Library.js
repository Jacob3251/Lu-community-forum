import React from "react";
import Header from "../Header/Header";
import ProfileSideMenu from "../ProfileSideMenu/ProfileSideMenu";
import { Link } from "react-router-dom";
const Library = () => {
  const data = [{
    "id": 1,
    "courseName": "Tahoe",
    "email": "gforrest0@wsj.com"
  }, {
    "id": 2,
    "courseName": "Volare",
    "email": "lburgoyne1@twitter.com"
  }, {
    "id": 3,
    "courseName": "8 Series",
    "email": "nkersaw2@admin.ch"
  }, {
    "id": 4,
    "courseName": "Corvair",
    "email": "acossentine3@arstechnica.com"
  }, {
    "id": 5,
    "courseName": "Explorer Sport",
    "email": "moldford4@umich.edu"
  }, {
    "id": 6,
    "courseName": "Continental",
    "email": "rheadan5@parallels.com"
  }, {
    "id": 7,
    "courseName": "Galant",
    "email": "mnussii6@sourceforge.net"
  }, {
    "id": 8,
    "courseName": "CX-7",
    "email": "dbatho7@umich.edu"
  }, {
    "id": 9,
    "courseName": "Protege",
    "email": "psperling8@cyberchimps.com"
  }, {
    "id": 10,
    "courseName": "Alero",
    "email": "hcanton9@dell.com"
  }, {
    "id": 11,
    "courseName": "G35",
    "email": "rpawelleka@columbia.edu"
  }, {
    "id": 12,
    "courseName": "Cayenne",
    "email": "bwildb@fc2.com"
  }, {
    "id": 13,
    "courseName": "F150",
    "email": "agurgec@dion.ne.jp"
  }, {
    "id": 14,
    "courseName": "V40",
    "email": "kdavidavidovicsd@google.cn"
  }, {
    "id": 15,
    "courseName": "Villager",
    "email": "scaneye@a8.net"
  }, {
    "id": 16,
    "courseName": "Tempo",
    "email": "dbrookzief@yahoo.com"
  }, {
    "id": 17,
    "courseName": "Avenger",
    "email": "glunbechg@friendfeed.com"
  }, {
    "id": 18,
    "courseName": "Golf",
    "email": "srotherforthh@typepad.com"
  }, {
    "id": 19,
    "courseName": "900",
    "email": "clumbi@geocities.jp"
  }, {
    "id": 20,
    "courseName": "Continental GTC",
    "email": "ecalderaj@bluehost.com"
  }];

  const secondary = data.slice(10)

  return (
    <div className=" w-full mx-auto h-[100vh] ">
      <div className="sticky top-0 z-10">
        
      </div>
      <div className="w-2/3 my-10  mx-auto bg-slate-200 py-10  shadow-lg ">
        <div className="text-center">
          <div>
            <h1 className=" w-5/6 mx-auto text-3xl font-bold  py-2">
              Library System
            </h1>
          </div>
        </div>

        <div className="form-control w-2/3 mx-auto  my-3 ">
          
          <select className="select select-primary mx-10 focus:outline-none bg-white rounded-none border-none">
            <option disabled selected>
              Pick Department...
            </option>
            <option>CSE</option>
            <option>EEE</option>
            <option>English</option>
            <option>Architecture</option>
            <option>Civil</option>
            <option>BBA</option>
          </select>
          <form className="">
            <input className="block w-[86%] mx-auto pl-4 my-4 py-2" type="text" placeholder="Enter book name..."/>
            <input className="block w-[86%] mx-auto bg-white p-2 rounded-md" type="submit" value="Search"/>
          </form>
          <ul>
          {
            secondary.map(u=> <li>{u.courseName}</li>)
          }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Library;
