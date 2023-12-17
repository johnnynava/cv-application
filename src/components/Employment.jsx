/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function Employment({ existingInfo, setExistingInfo }) {
  const mappedJobs = existingInfo.map((job, index) => {
    const handleChange = (e) => {
      setExistingInfo((prev) => {
        return prev.map((job, i) => {
          return i === index
            ? { ...job, [e.target.name]: e.target.value }
            : job;
        });
      });
    };
    const mappedDescription = job.description.map((bullet, descIndex) => {
      const handleChangeForDesc = (e) => {
        setExistingInfo((prev) => {
          return prev.map((job, i) => {
            return i === index
              ? {
                  ...job,
                  description: job.description.map((blt, j) => {
                    return j === descIndex ? e.target.value : blt;
                  }),
                }
              : job;
          });
        });
      };
      return (
        <Fragment key={descIndex}>
          <textarea
            className="editJobsInput"
            value={bullet}
            onChange={handleChangeForDesc}
          ></textarea>
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
          name="position"
          onChange={handleChange}
        ></input>
        <label htmlFor={index + "company"}>Company</label>
        <input
          id={index + "company"}
          type="text"
          className="editJobsInput"
          value={job.company}
          name="company"
          onChange={handleChange}
        ></input>
        <label htmlFor={index + "years"}>Date</label>
        <input
          id={index + "years"}
          type="text"
          className="editJobsInput"
          value={job.years}
          name="years"
          onChange={handleChange}
        ></input>
        <label htmlFor={index + "location"}>Location</label>
        <input
          id={index + "location"}
          type="text"
          className="editJobsInput"
          value={job.location}
          name="location"
          onChange={handleChange}
        ></input>
        <p>Description</p>
        {mappedDescription}
      </Fragment>
    );
  });
  return (
    <form action="#" method="post" className="editJobsBox">
      {mappedJobs}
    </form>
  );
}
