/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function Projects({ existingInfo, setExistingInfo }) {
  const mappedProjects = existingInfo.map((project, index) => {
    const handleChange = (e) => {
      setExistingInfo((prev) => {
        return prev.map((project, i) => {
          return i === index
            ? { ...project, [e.target.name]: e.target.value }
            : project;
        });
      });
    };
    return (
      <Fragment key={index}>
        <label htmlFor={index + "title"}>Project Title</label>
        <input
          id={index + "title"}
          type="text"
          value={project.title}
          name="title"
          className="editProjectsInput"
          onChange={handleChange}
        ></input>
        <label htmlFor={project.link}>Project Link</label>
        <input
          id={project.link}
          type="text"
          value={project.link}
          name="link"
          className="editProjectsInput"
          onChange={handleChange}
        ></input>
        <label htmlFor={index + "description"}>Project Description</label>
        <textarea
          id={index + "description"}
          value={project.description}
          name="description"
          className="editProjectsInput"
          onChange={handleChange}
        ></textarea>
      </Fragment>
    );
  });
  return (
    <form action="#" method="post" className="editProjectsBox">
      {mappedProjects}
    </form>
  );
}
