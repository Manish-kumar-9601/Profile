import React from "react";
import user from "./1684676744478_imgbg.net.png";
import { BsInstagram } from "react-icons/bs";

import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandRedux, TbBrandJavascript } from "react-icons/tb";

import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";

import {
  AiFillGithub,
  AiFillPhone,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import "./proflie.css";
function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="left-profile">
          <p>
            <a href="https://html.com/">
              <TiHtml5 className="html" />
            </a>

            <a href="https://www.bing.com/search?q=css&filters=dtbk:%22MCFvdmVydmlldyFvdmVydmlldyFjY2NlOTQ3ZC1mYmIxLWY5ZDYtYTRmMC1hMmQ0MzZkZGQ2MDE%3d%22+sid:%22ccce947d-fbb1-f9d6-a4f0-a2d436ddd601%22+tphint:%22f%22&FORM=DEPNAV">
              <IoLogoCss3 className="css" />
            </a>

            <a href="https://www.javascript.com/">
              <TbBrandJavascript className="javascript" />
            </a>

            <a href="https://react.dev/">
              <FaReact className="react" />
            </a>
            <a href="https://redux.js.org/">
              <TbBrandRedux className="redux" />
            </a>
          </p>
        </div>
        <section>
          <div className="image">
            <h2>MANISH KUMAR</h2>
            <img src={user} className="user" alt="user" />
          </div>
        </section>

        <div className="right-profile">
          <section>
            <div className="following-area">
              <div className="social-area">
                <a href="https://github.com/Manish-kumar-9601/my-portfolio.git">
                  <AiFillGithub className="github" />
                </a>
                <a href="https://instagram.com/demon_slayer1919?igshid=OTk0YzhjMDVlZA==">
                  <BsInstagram className="instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100044228883370">
                  <BsFacebook className="facebook" />
                </a>
              </div>

              <div className=" email">
                <AiOutlineMail />
                <b>:manishkumar960172@gmail.com</b>
              </div>

              <div className="phone">
                <AiFillPhone />
                <b>:+919601727836</b>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Profile;
