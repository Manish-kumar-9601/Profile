import React from 'react';
 
import {
  WorkExprience,
  Education,
  SkillAndLanguages,
} from "../../exporter";




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