import MapPlaceholder from "./MapPlaceholder";
import VillageList from "./VillageList";
import PlotTable from "./PlotTable";

function VillageOverview({ villages, plots }) {
  return (
    <div className="card">
      <h2 className="card-title">Village and Plot Overview</h2>
      <div className="overview-grid">
        <MapPlaceholder villages={villages} />
        <VillageList villages={villages} />
      </div>
      <h3 className="sub-title">Recent Plots</h3>
      <PlotTable plots={plots} />
    </div>
  );
}

export default VillageOverview;
