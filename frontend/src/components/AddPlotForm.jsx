import { useState } from "react";
import "../styles/addplot.css";

function AddPlotForm({ villages, onAdd }) {
  const [owner, setOwner] = useState("");
  const [village, setVillage] = useState("");
  const [acres, setAcres] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await onAdd({ village, owner, area: acres + " acres" });
      setOwner("");
      setAcres("");
      setMessage("Plot added as Pending.");
    } catch (error) {
      setMessage("Could not add plot. Check that the backend is running.");
    }
  }

  return (
    <div>
      <form className="add-plot" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Owner name"
          value={owner}
          onChange={(event) => setOwner(event.target.value)}
          required
        />
        <select
          className="input"
          value={village}
          onChange={(event) => setVillage(event.target.value)}
          required
        >
          <option value="">Select village</option>
          {villages.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <input
          className="input"
          type="number"
          min="0.1"
          step="0.1"
          placeholder="Area (acres)"
          value={acres}
          onChange={(event) => setAcres(event.target.value)}
          required
        />
        <button className="button" type="submit">
          Add plot
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
}

export default AddPlotForm;
