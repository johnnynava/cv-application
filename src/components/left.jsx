/* eslint-disable react/prop-types */
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Summary from "./Summary";
import Skills from "./Skills";
// import Employment from "./Employment";
import Projects from "./Projects";
import Education from "./Education";

const components = {
  PersonalDetails: PersonalDetails,
  Summary: Summary,
  Skills: Skills,
  //   Employment: Employment,
  Projects: Projects,
  Education: Education,
};

//existingInfo
const EditButton = ({ name, editIsActive, onClick, existingInfo }) => {
  const TargetComponent = components[name];
  let title;
  if (name === "PersonalDetails") {
    title = "Personal Details";
  } else if (name === "Skills") {
    title = "Skills and tools";
  } else title = name;
  if (editIsActive === name) {
    return (
      <>
        <div className="editButton" onClick={onClick} data-value={name}>
          {title}
        </div>
        <TargetComponent existingInfo={existingInfo}></TargetComponent>
      </>
    );
  } else if (editIsActive === "none") {
    return (
      <div className="editButton" onClick={onClick} data-value={name}>
        {title}
      </div>
    );
  }
};

// personalDetails={personalDetails}
// summary={summary}
// skills={skills}
// education={education}
// projects={projects}
// employment={employment}

export default function Left({
  personalDetails,
  summary,
  skills,
  education,
  projects,
  employment,
}) {
  const [editIsActive, setEditIsActive] = useState("none");
  const handleEditClick = (e) => {
    if (editIsActive === e.target.dataset.value) {
      setEditIsActive("none");
    } else {
      setEditIsActive(e.target.dataset.value);
    }
  };
  return (
    <div className="left">
      <EditButton
        name="PersonalDetails"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={personalDetails}
      ></EditButton>
      <EditButton
        name="Summary"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={summary}
      ></EditButton>
      <EditButton
        name="Skills"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={skills}
      ></EditButton>
      <EditButton
        name="Employment"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={employment}
      ></EditButton>
      <EditButton
        name="Projects"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={projects}
      ></EditButton>
      <EditButton
        name="Education"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={education}
      ></EditButton>
    </div>
  );
}

// PROYECTOS OBJ[PROYECTOS]
//  EDITPROYECTOS
//  SHOWPROYECTOS
//APP -> PROJECTS(OBJ)
//  LEFT
//    EDITPROJECTS
//  RIGHT
//    SHOWPROJECTS
