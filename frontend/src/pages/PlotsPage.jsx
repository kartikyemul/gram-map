import { useState } from "react";
import SummaryCard from "../components/SummaryCard";
import PlotFilters from "../components/PlotFilters";
import PlotTable from "../components/PlotTable";
import AddPlotForm from "../components/AddPlotForm";

const statuses = ["Verified", "Pending", "Disputed"];

function PlotsPage({ villages, plots, onAddPlot }) {
  const [filters, setFilters] = useState({ search: "", village: "All", status: "All" });

  const visiblePlots = plots.filter((plot) => {
    const text = (plot.id + " " + plot.owner).toLowerCase();
    return (
      text.includes(filters.search.toLowerCase()) &&
      (filters.village === "All" || plot.village === filters.village) &&
      (filters.status === "All" || plot.status === filters.status)
    );
  });

  return (
    <>
      <section className="summary-grid">
        {statuses.map((status) => (
          <SummaryCard
            key={status}
            label={status}
            value={plots.filter((plot) => plot.status === status).length}
            note={"of " + plots.length + " plots"}
          />
        ))}
      </section>
      <div className="card">
        <h2 className="card-title">All Plots</h2>
        <PlotFilters filters={filters} villages={villages} onChange={setFilters} />
        <p className="card-note">
          Showing {visiblePlots.length} of {plots.length} plots
        </p>
        <PlotTable plots={visiblePlots} />
      </div>
      <div className="card">
        <h2 className="card-title">Add Plot</h2>
        <AddPlotForm villages={villages} onAdd={onAddPlot} />
      </div>
    </>
  );
}

export default PlotsPage;
