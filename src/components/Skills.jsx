export default function Skills({ existingInfo }) {
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
