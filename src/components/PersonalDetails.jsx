/* eslint-disable react/prop-types */
export default function PersonalDetails({ existingInfo, setExistingInfo }) {
  const handleChange = (e) => {
    setExistingInfo({
      ...existingInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form action="#" method="post" className="editPersonalDetailsBox">
      <label htmlFor="fullNameInput">Full Name</label>
      <input
        value={existingInfo.fullName}
        name="fullName"
        type="text"
        id="fullNameInput"
        className="editPersonalDetailsInput"
        onChange={handleChange}
      ></input>
      <label htmlFor="phoneInput">Phone Number</label>
      <input
        value={existingInfo.phone}
        name="phone"
        type="tel"
        id="phoneInput"
        className="editPersonalDetailsInput"
        onChange={handleChange}
      ></input>
      <label htmlFor="locationInput">Location</label>
      <input
        value={existingInfo.location}
        name="location"
        type="text"
        id="locationInput"
        className="editPersonalDetailsInput"
        onChange={handleChange}
      ></input>
      <label htmlFor="linkedInInput">LinkedIn</label>
      <input
        value={existingInfo.linkedIn}
        name="linkedIn"
        type="text"
        id="linkedInInput"
        className="editPersonalDetailsInput"
        onChange={handleChange}
      ></input>
      <label htmlFor="websiteInput">Website</label>
      <input
        value={existingInfo.website}
        name="website"
        type="text"
        id="websiteInput"
        className="editPersonalDetailsInput"
        onChange={handleChange}
      ></input>
      <label htmlFor="githubInput">Github</label>
      <input
        value={existingInfo.github}
        name="github"
        type="text"
        id="githubInput"
        className="editPersonalDetailsInput"
        onChange={handleChange}
      ></input>
    </form>
  );
}
