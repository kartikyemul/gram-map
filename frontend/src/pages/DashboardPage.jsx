import SummaryCard from "../components/SummaryCard";
import VillageOverview from "../components/VillageOverview";
import RecentActivity from "../components/RecentActivity";
import { summaryCards, recentActivity } from "../data/sampleData";

function DashboardPage({ villages, plots, onAddPlot }) {
  return (
    <>
      <section className="summary-grid">
        {summaryCards.map((card) => (
          <SummaryCard key={card.id} label={card.label} value={card.value} note={card.note} />
        ))}
      </section>
      <VillageOverview villages={villages} plots={plots} onAddPlot={onAddPlot} />
      <RecentActivity items={recentActivity} />
    </>
  );
}

export default DashboardPage;
