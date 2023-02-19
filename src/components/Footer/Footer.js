import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer = ({ footerClass }) => {
  return (
    <div className={footerClass}>
      <footer className="flex justify-center space-y-4 flex-col p-5  text-base-content  bg-gray-800">
        <div className="flex justify-center space-x-3">
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </div>
        <div className="flex justify-center space-x-3">
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/real_hnayeem98" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="h-5 w-5 text-white hover:text-[#dc4734] hover:scale-125 duration-300 hover:bg-white rounded-full p-2"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.youtube.com/user/Alamgir01715/videos"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="h-5 w-5 text-white hover:text-[#dc4734] hover:scale-125 duration-300 hover:bg-white rounded-full p-2"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.facebook.com/leadinguniversity2001"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-5 w-5 text-white hover:text-[#dc4734] hover:scale-125 duration-300 hover:bg-white rounded-full p-2"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div>
          <p className="text-white text-center">
            Copyright © 2022 - All right reserved by Leading University
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
