import React from "react";

import "./education.css";
import { MdBook } from "react-icons/md";

function Education() {
  return (
    <>
      <div className="education-container">
        <h3 className="education">
          <i>
            <MdBook /> Education and Qualifications
          </i>
        </h3>
        <div className="education-box">
      
            <b> Matric Qualified</b>
          
          <br />
          <p className="param">
            Learned web development from online youtube courses. The courses are
            <b className="box"> HTML ,CSS,JAVASCRIPT</b> <br />
            And framework like <b>REACT</b> and
            <b> REDUX</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default Education;
