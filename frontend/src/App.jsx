import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import RecentActivity from "./components/RecentActivity";
import VillageOverview from "./components/VillageOverview";
import { getData, postData } from "./api";
import {
  summaryCards,
  recentActivity,
  villages as sampleVillages,
  plots as samplePlots,
} from "./data/sampleData";

function App() {
  const [villages, setVillages] = useState(sampleVillages);
  const [plots, setPlots] = useState(samplePlots);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    Promise.all([getData("/villages"), getData("/plots")])
      .then(([villageData, plotData]) => {
        setVillages(villageData);
        setPlots(plotData);
        setOnline(true);
      })
      .catch(() => setOnline(false));
  }, []);

  async function addPlot(newPlot) {
    const created = await postData("/plots", newPlot);
    setPlots((current) => [created, ...current]);
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header title="Dashboard" online={online} />
        <div className="content">
          <section className="summary-grid">
            {summaryCards.map((card) => (
              <SummaryCard key={card.id} label={card.label} value={card.value} note={card.note} />
            ))}
          </section>
          <VillageOverview villages={villages} plots={plots} onAddPlot={addPlot} />
          <RecentActivity items={recentActivity} />
        </div>
      </div>
    </div>
  );
}

export default App;
