/* eslint-disable react/prop-types */
export default function Skills({ existingInfo, setExistingInfo }) {
  const mappedSkills = existingInfo.map((skill, index) => {
    return <input type="text" key={index} value={skill}></input>;
  });
  return (
    <form action="#" method="post" className="editSkillsBox">
      {mappedSkills}
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
}
