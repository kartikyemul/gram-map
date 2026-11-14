import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import RecentActivity from "./components/RecentActivity";
import VillageOverview from "./components/VillageOverview";
import { summaryCards, recentActivity, villages, plots } from "./data/sampleData";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header title="Dashboard" />
        <div className="content">
          <section className="summary-grid">
            {summaryCards.map((card) => (
              <SummaryCard key={card.id} label={card.label} value={card.value} note={card.note} />
            ))}
          </section>
          <VillageOverview villages={villages} plots={plots} />
          <RecentActivity items={recentActivity} />
        </div>
      </div>
    </div>
  );
}

export default App;
