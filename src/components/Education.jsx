export default function Education({ existingInfo, setExistingInfo }) {
  return (
    <form action="#" method="post" className="editEducationBox">
      <label htmlFor="universityInput">University</label>
      <input
        value={existingInfo.university}
        type="text"
        id="universityInput"
        className="editEducationInput"
      ></input>
      <label htmlFor="degreeInput">Degree</label>
      <input
        value={existingInfo.degree}
        type="text"
        id="degreeInput"
        className="editEducationInput"
      ></input>
      <label htmlFor="degreeYearsInput">Years</label>
      <input
        value={existingInfo.years}
        type="text"
        id="degreeYearsInput"
        className="editEducationInput"
      ></input>
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
}
