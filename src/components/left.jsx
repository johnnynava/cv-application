/* eslint-disable react/prop-types */
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Summary from "./Summary";
import Skills from "./Skills";
import Employment from "./Employment";
import Projects from "./Projects";
import Education from "./Education";

const components = {
  PersonalDetails: PersonalDetails,
  Summary: Summary,
  Skills: Skills,
  Employment: Employment,
  Projects: Projects,
  Education: Education,
};

const EditButton = ({
  name,
  editIsActive,
  onClick,
  existingInfo,
  setExistingInfo,
}) => {
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
        <TargetComponent
          existingInfo={existingInfo}
          setExistingInfo={setExistingInfo}
        ></TargetComponent>
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

export default function Left({
  personalDetails,
  setPersonalDetails,
  summary,
  setSummary,
  skills,
  setSkills,
  education,
  setEducation,
  projects,
  setProjects,
  employment,
  setEmployment,
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
        setExistingInfo={setPersonalDetails}
      ></EditButton>
      <EditButton
        name="Summary"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={summary}
        setExistingInfo={setSummary}
      ></EditButton>
      <EditButton
        name="Skills"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={skills}
        setExistingInfo={setSkills}
      ></EditButton>
      <EditButton
        name="Employment"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={employment}
        setExistingInfo={setEmployment}
      ></EditButton>
      <EditButton
        name="Projects"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={projects}
        setExistingInfo={setProjects}
      ></EditButton>
      <EditButton
        name="Education"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={education}
        setExistingInfo={setEducation}
      ></EditButton>
    </div>
  );
}
