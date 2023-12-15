/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function Employment({ existingInfo }) {
  const mappedJobs = existingInfo.map((job, index) => {
    const mappedDescription = job.description.map((bullet, index) => {
      return (
        <Fragment key={index}>
          <textarea className="editJobsInput" value={bullet}></textarea>
        </Fragment>
      );
    });
    return (
      <Fragment key={index}>
        <label htmlFor={index + "position"}>Position</label>
        <input
          id={index + "position"}
          type="text"
          className="editJobsInput"
          value={job.position}
        ></input>
        <label htmlFor={index + "company"}>Company</label>
        <input
          id={index + "company"}
          type="text"
          className="editJobsInput"
          value={job.company}
        ></input>
        <label htmlFor={index + "years"}>Date</label>
        <input
          id={index + "years"}
          type="text"
          className="editJobsInput"
          value={job.years}
        ></input>
        <label htmlFor={index + "location"}>Location</label>
        <input
          id={index + "location"}
          type="text"
          className="editJobsInput"
          value={job.location}
        ></input>
        <p>Description</p>
        {mappedDescription}
      </Fragment>
    );
  });
  return (
    <form action="#" method="post" className="editJobsBox">
      {mappedJobs}
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
}
