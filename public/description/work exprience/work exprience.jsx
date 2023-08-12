import React from 'react'; 

import './work exprience.css';
import { MdWork } from "react-icons/md";

function WorkExprience() {
  return (
    <>
      <div className="workExprience-container">
        <div className="work">
          <i>
            <MdWork />
            Work Exprience
          </i>
        </div>

        <div className="work-box">
          <b> Front-End Developer</b><br />

          <i className="exp">Explore the Web development</i>
          <p className='expr'>
            Used a range of languages ,operating system and development tools as
            well as experincing the system development life cycle .Specialising
            in moblie website desgin .
          </p>
          <li>Writing react-redux website .</li>
          <li> worked on Database , Axios and Api.</li>
        </div>
      </div>
    </>
  );
}

export default WorkExprience;