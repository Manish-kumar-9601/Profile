import React from "react";
import "./skill and langauge.css";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";


function SkillAndLanguages() {

 

  return (
    <>
      <div className="skill-container">
        <div className="skill">
          <div className="Skill">
            <i>
              <TbDeviceDesktopAnalytics /> Skills
            </i>
          </div>

          <div className="skill-box">
            <div className="skill-box">
              <h4>HTML & CSS</h4>
              <div className="progess-wrap">
                <span data-percent="78" className="progess-bar HTML"></span>
              </div>
            </div>
            <div className="skill-box">
              <h4>JAVASCRIPT</h4>
              <div className="progess-wrap">
                <span
                  data-percent="70"
                  className="progess-bar JAVASCRIPT"
                ></span>
              </div>
            </div>
            <div className="skill-box">
              <h4>REACT</h4>
              <div className="progess-wrap">
                <span data-percent="68" className="progess-bar REACT"></span>
              </div>
            </div>
            <div className="skill-box">
              <h4>REDUX</h4>
              <div className="progess-wrap">
                <span data-percent="58" className="progess-bar REDUX"></span>
              </div>
            </div>

            <div className="skill-box">
              <h4>Hindi</h4>
              <div className="progess-wrap">
                <span data-percent="90" className="progess-bar Hindi"></span><span></span>
              </div>
            </div>
            <div className="skill-box">
              <h4>English</h4>
              <div className="progess-wrap">
                <span data-percent="70" className="progess-bar English"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillAndLanguages;
