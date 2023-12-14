import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="content">
      <div className="left">
        {/* <div className="personalDetailsEdit">
          <p>Personal Details</p>
          <img className="chevron"></img>
        </div>
        <div className="summaryEdit">
          <p>Summary</p>
          <img className="chevron"></img>
        </div>
        <div className="skillsEdit">
          <p>Skills and Tools</p>
          <img className="chevron"></img>
        </div>
        <div className="educationEdit">
          <p>Education</p>
          <img className="chevron"></img>
        </div>
        <div className="projectsEdit">
          <p>Projects</p>
          <img className="chevron"></img>
        </div>
        <div className="employmentEdit">
          <p>Employment</p>
          <img className="chevron"></img>
        </div> */}
      </div>
      <div className="right">
        <div className="personalDetails"></div>
        <div className="summary"></div>
        <div className="skills"></div>
        <div className="education"></div>
        <div className="projects"></div>
        <div className="employment"></div>
      </div>
    </div>
  );
}

export default App;
