/* eslint-disable react/prop-types */
export default function PersonalDetails({ existingInfo }) {
  return (
    <form action="#" method="post" className="editPersonalDetailsBox">
      <label htmlFor="fullNameInput">Full Name</label>
      <input
        value={existingInfo.fullName}
        type="text"
        id="fullNameInput"
        className="editPersonalDetailsInput"
      ></input>
      <label htmlFor="phoneInput">Phone Number</label>
      <input
        value={existingInfo.phone}
        type="tel"
        id="phoneInput"
        className="editPersonalDetailsInput"
      ></input>
      <label htmlFor="locationInput">Location</label>
      <input
        value={existingInfo.location}
        type="text"
        id="locationInput"
        className="editPersonalDetailsInput"
      ></input>
      <label htmlFor="linkedInInput">LinkedIn</label>
      <input
        value={existingInfo.linkedIn}
        type="text"
        id="linkedInInput"
        className="editPersonalDetailsInput"
      ></input>
      <label htmlFor="websiteInput">Website</label>
      <input
        value={existingInfo.website}
        type="text"
        id="websiteInput"
        className="editPersonalDetailsInput"
      ></input>
      <label htmlFor="githubInput">Github</label>
      <input
        value={existingInfo.github}
        type="text"
        id="githubInput"
        className="editPersonalDetailsInput"
      ></input>
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
}
