export default function Summary({ existingInfo }) {
  return (
    <form action="#" method="post" className="editSummaryBox">
      <label for="summaryInput">Summary</label>
      <textarea id="summaryInput" value={existingInfo}></textarea>
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
}
