import MapView from "./MapView";
import VillageList from "./VillageList";
import PlotTable from "./PlotTable";

function VillageOverview({ villages, plots }) {
  return (
    <div className="card">
      <h2 className="card-title">Village and Plot Overview</h2>
      <div className="overview-grid">
        <MapView villages={villages} />
        <VillageList villages={villages} />
      </div>
      <h3 className="sub-title">Latest Plots</h3>
      <PlotTable plots={plots.slice(0, 5)} />
    </div>
  );
}

export default VillageOverview;
