/* eslint-disable react/prop-types */
import { useState } from "react";

const EditButton = ({ name, editIsActive, onClick, existingInfo }) => {
  const ComponentName = name;
  let title;
  if (name === "PersonalDetails") {
    title = "Personal Details";
  } else if (name === "Skills") {
    title = "Skills and tools";
  } else title = name;
  if (editIsActive === name) {
    return (
      <>
        <div className="editButton" onClick={onClick}>
          <p>{title}</p>
          <img className="chevron"></img>
        </div>
        <ComponentName existingInfo={existingInfo}></ComponentName>
      </>
    );
  } else if (editIsActive === "none") {
    return (
      <>
        <div className="editButton" onClick={onClick}>
          <p>{title}</p>
          <img className="chevron"></img>
        </div>
      </>
    );
  }
};

export default function Left() {
  const [editIsActive, setEditIsActive] = useState("none");
  const handleEditClick = (e) => {
    if (editIsActive === e.target.value) {
      setEditIsActive("none");
    } else {
      setEditIsActive(e.target.value);
    }
  };
  return (
    <>
      <EditButton
        name="PersonalDetails"
        editIsActive={editIsActive}
        onClick={handleEditClick}
        existingInfo={}
      ></EditButton>
      <EditButton
        name="Summary"
        editIsActive={editIsActive}
        onClick={handleEditClick}
      ></EditButton>
      <EditButton
        name="Skills"
        editIsActive={editIsActive}
        onClick={handleEditClick}
      ></EditButton>
      <EditButton
        name="Education"
        editIsActive={editIsActive}
        onClick={handleEditClick}
      ></EditButton>
      <EditButton
        name="Projects"
        editIsActive={editIsActive}
        onClick={handleEditClick}
      ></EditButton>
      <EditButton
        name="Employment"
        editIsActive={editIsActive}
        onClick={handleEditClick}
      ></EditButton>
    </>
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
