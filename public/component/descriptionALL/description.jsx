import React from 'react';

import './description.css';
import {
  WorkExprience,
  Education,
  SkillAndLanguages,
} from "../../../src/exporter";




function Description() {
  return (
    <>
      <div className="description-container">
        <WorkExprience/><br />
        <Education/><br />
        <SkillAndLanguages/><br />
    </div>
    </>
  )
}

export default Description