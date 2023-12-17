/* eslint-disable react/prop-types */
export default function Skills({ existingInfo, setExistingInfo }) {
  const mappedSkills = existingInfo.map((skill, index) => {
    const handleChange = (e) => {
      setExistingInfo((prev) => {
        return prev.map((item, i) => {
          return index === i ? e.target.value : item;
        });
      });
    };
    return (
      <input
        type="text"
        key={index}
        value={skill}
        onChange={handleChange}
      ></input>
    );
  });
  return (
    <form action="#" method="post" className="editSkillsBox">
      {mappedSkills}
    </form>
  );
}
