import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10  text-base-content rounded bg-blue-500">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover text-white">About us</a>
        <a className="link link-hover text-white">Contact</a>
        <a className="link link-hover text-white">Jobs</a>
        <a className="link link-hover text-white">Press kit</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/real_hnayeem98" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-5 w-5 text-white"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.youtube.com/user/Alamgir01715/videos"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="h-5 w-5 text-white"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.facebook.com/leadinguniversity2001"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="h-5 w-5 text-white"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div>
        <p className="text-white">
          Copyright © 2022 - All right reserved by Leading University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
