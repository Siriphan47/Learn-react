import "./AddForm.css";

export default function AddForm() {
  return (
    <section className="container">
      <form>
        <label>Name's population</label>
        <input type="text" />
        <select>
          <option>Male</option>
          <option>Female</option>
        </select>
        <button type="submit" className="btn-save">
          Save
        </button>
      </form>
    </section>
  );
}
