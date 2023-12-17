/* eslint-disable react/prop-types */

export default function Summary({ existingInfo, setExistingInfo }) {
  return (
    <form action="#" method="post" className="editSummaryBox">
      <label htmlFor="summaryInput">Summary</label>
      <textarea
        id="summaryInput"
        value={existingInfo}
        onChange={(e) => setExistingInfo(e.target.value)}
      ></textarea>
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
}
