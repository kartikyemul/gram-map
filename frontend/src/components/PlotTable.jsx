function PlotTable({ plots }) {
  return (
    <div className="table-wrap">
      <table className="plot-table">
        <thead>
          <tr>
            <th>Plot</th>
            <th>Village</th>
            <th>Area</th>
            <th>Owner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {plots.map((plot) => (
            <tr key={plot.id}>
              <td>{plot.id}</td>
              <td>{plot.village}</td>
              <td>{plot.area}</td>
              <td>{plot.owner}</td>
              <td>
                <span className={"badge badge-" + plot.status.toLowerCase()}>{plot.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlotTable;
