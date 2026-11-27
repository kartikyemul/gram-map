import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import DashboardPage from "./pages/DashboardPage";
import PlotsPage from "./pages/PlotsPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import { getData, postData } from "./api";
import { villages as sampleVillages, plots as samplePlots } from "./data/sampleData";
import { useRoute, getTitle } from "./navigation";

function App() {
  const route = useRoute();
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

  function renderPage() {
    if (route === "dashboard") {
      return <DashboardPage villages={villages} plots={plots} />;
    }
    if (route === "plots") {
      return <PlotsPage villages={villages} plots={plots} onAddPlot={addPlot} />;
    }
    return <PlaceholderPage title={getTitle(route)} />;
  }

  return (
    <div className="app">
      <Sidebar route={route} />
      <div className="main">
        <Header title={getTitle(route)} online={online} />
        <div className="content">
          <ErrorBoundary key={route}>{renderPage()}</ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
