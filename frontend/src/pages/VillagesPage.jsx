import { useMemo, useState } from "react";
import MapView from "../components/MapView";
import PlotTable from "../components/PlotTable";
import "../styles/villages.css";

function VillagesPage({ villages, plots }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = villages.find((village) => village.id === selectedId) || null;

  const mapVillages = useMemo(() => (selected ? [selected] : villages), [selected, villages]);
  const villagePlots = selected ? plots.filter((plot) => plot.village === selected.name) : [];

  return (
    <>
      <div className="card">
        <h2 className="card-title">{selected ? selected.name : "All Villages"}</h2>
        <MapView villages={mapVillages} />
      </div>

      {selected ? (
        <div className="card">
          <button className="link-button" onClick={() => setSelectedId(null)}>
            Back to all villages
          </button>
          <div className="facts">
            <div>
              <p className="card-label">Taluka</p>
              <p className="fact-value">{selected.taluka}</p>
            </div>
            <div>
              <p className="card-label">Registered plots</p>
              <p className="fact-value">{selected.plots}</p>
            </div>
            <div>
              <p className="card-label">Plots listed</p>
              <p className="fact-value">{villagePlots.length}</p>
            </div>
            <div>
              <p className="card-label">Location</p>
              <p className="fact-value">
                {Number(selected.lat).toFixed(3)}, {Number(selected.lng).toFixed(3)}
              </p>
            </div>
          </div>
          <h3 className="sub-title">Plots in {selected.name}</h3>
          <PlotTable plots={villagePlots} />
        </div>
      ) : (
        <div className="card">
          <h2 className="card-title">Select a village</h2>
          <ul className="village-cards">
            {villages.map((village) => (
              <li key={village.id}>
                <button className="village-card" onClick={() => setSelectedId(village.id)}>
                  <span className="village-card-name">{village.name}</span>
                  <span className="village-card-meta">
                    {village.taluka} | {village.plots} plots
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default VillagesPage;
