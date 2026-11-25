import "../styles/filters.css";

const statuses = ["Verified", "Pending", "Disputed"];

function PlotFilters({ filters, villages, onChange }) {
  function update(field, value) {
    onChange({ ...filters, [field]: value });
  }

  return (
    <div className="filters">
      <input
        type="search"
        className="input"
        placeholder="Search plot or owner"
        value={filters.search}
        onChange={(event) => update("search", event.target.value)}
      />
      <select
        className="input"
        value={filters.village}
        onChange={(event) => update("village", event.target.value)}
      >
        <option value="All">All villages</option>
        {villages.map((village) => (
          <option key={village.id} value={village.name}>
            {village.name}
          </option>
        ))}
      </select>
      <select
        className="input"
        value={filters.status}
        onChange={(event) => update("status", event.target.value)}
      >
        <option value="All">All statuses</option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PlotFilters;
