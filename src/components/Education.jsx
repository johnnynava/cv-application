/* eslint-disable react/prop-types */
export default function Education({ existingInfo, setExistingInfo }) {
  const handleChange = (e) => {
    setExistingInfo({
      ...existingInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form action="#" method="post" className="editEducationBox">
      <label htmlFor="universityInput">University</label>
      <input
        value={existingInfo.university}
        name="university"
        type="text"
        id="universityInput"
        className="editEducationInput"
        onChange={handleChange}
      ></input>
      <label htmlFor="degreeInput">Degree</label>
      <input
        value={existingInfo.degree}
        name="degree"
        type="text"
        id="degreeInput"
        className="editEducationInput"
        onChange={handleChange}
      ></input>
      <label htmlFor="degreeYearsInput">Years</label>
      <input
        value={existingInfo.years}
        name="years"
        type="text"
        id="degreeYearsInput"
        className="editEducationInput"
        onChange={handleChange}
      ></input>
    </form>
  );
}
