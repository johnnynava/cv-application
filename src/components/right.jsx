/* eslint-disable react/prop-types */
import emailLogo from "../assets/email.svg";
import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import locationLogo from "../assets/location.svg";
import phoneLogo from "../assets/phone.svg";
import websiteLogo from "../assets/website.svg";

export default function Right({
  personalDetails,
  summary,
  skills,
  education,
  projects,
  employment,
}) {
  let mappedSkills = skills.map((skill, index) => {
    return <li key={index}>{skill}</li>;
  });
  let mappedProjects = projects.map((project, index) => {
    return (
      <div key={index}>
        <h3 className="projectTitle">{project.title}</h3>
        <div>
          <a href={project.link} className="projectLink">
            {project.link}
          </a>
        </div>
        <p className="projectDescription">{project.description}</p>
      </div>
    );
  });
  let mappedEmployment = employment.map((job, index) => {
    return (
      <div key={index}>
        <h3 className="jobPosition">{job.position}</h3>
        <h4 className="jobCompany">{job.company}</h4>
        <p className="jobYears">{job.years}</p>
        <p className="jobLocation">{job.location}</p>
        <ul className="jobDescription">
          {job.description.map((description, index) => {
            return <li key={index}>{description}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div className="right">
      <div className="personalDetails">
        <div className="personalDetailsLeft">
          <p className="fullName">{personalDetails.fullName}</p>
          <p className="jobTitle">{personalDetails.job}</p>
        </div>
        <div className="personalDetailsRight">
          <div>
            <img src={emailLogo}></img>
            <p>{personalDetails.email}</p>
          </div>
          <div>
            <img src={phoneLogo}></img>
            <p>{personalDetails.phone}</p>
          </div>
          <div>
            <img src={locationLogo}></img>
            <p>{personalDetails.location}</p>
          </div>
          <div>
            <img src={githubLogo}></img>
            <p>{personalDetails.github}</p>
          </div>
          {/* <div>
            <img src={websiteLogo}></img>
            <p>{personalDetails.website}</p>
          </div> */}
          <div>
            <img src={linkedinLogo}></img>
            <p id="linkedIn">{personalDetails.linkedIn}</p>
          </div>
        </div>
      </div>
      <div className="actualContent">
        <div className="summary">
          <h2>Summary</h2>
          <div>{summary}</div>
        </div>
        <div className="skills">
          <h2>Skills and Tools</h2>
          <ul>{mappedSkills}</ul>
        </div>
        <div className="employment">
          <h2>Employment</h2>
          {mappedEmployment}
        </div>
        {/* <div className="projects">
          <h2>Projects</h2>
          {mappedProjects}
        </div> */}
        <div className="education">
          <h2>Education</h2>
          <h3 className="university">{education.university}</h3>
          <h4 className="degree">{education.degree}</h4>
          <div className="educationYears">{education.years}</div>
        </div>
      </div>
    </div>
  );
}
