import { useState } from "react";
import MapView from "./MapView";
import VillageList from "./VillageList";
import PlotFilters from "./PlotFilters";
import PlotTable from "./PlotTable";
import AddPlotForm from "./AddPlotForm";

function VillageOverview({ villages, plots, onAddPlot }) {
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
    <div className="card">
      <h2 className="card-title">Village and Plot Overview</h2>
      <div className="overview-grid">
        <MapView villages={villages} />
        <VillageList villages={villages} />
      </div>
      <h3 className="sub-title">Plots</h3>
      <PlotFilters filters={filters} villages={villages} onChange={setFilters} />
      <PlotTable plots={visiblePlots} />
      <h3 className="sub-title">Add Plot</h3>
      <AddPlotForm villages={villages} onAdd={onAddPlot} />
    </div>
  );
}

export default VillageOverview;
