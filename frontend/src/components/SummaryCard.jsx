function SummaryCard({ label, value, note }) {
  return (
    <div className="card summary-card">
      <p className="card-label">{label}</p>
      <p className="card-value">{value.toLocaleString()}</p>
      <p className="card-note">{note}</p>
    </div>
  );
}

export default SummaryCard;
