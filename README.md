# GramMap

A GIS-inspired web dashboard for rural land governance. Stage 3 adds plot search and filters, and a form to register new plots through the Go API.

## Tech stack

- Frontend: React + Vite + JavaScript, plain CSS, Leaflet
- Backend: Go (standard library only)
- Map tiles: OpenStreetMap (free, no API key)

## Requirements

- Node.js 18 or newer, with npm
- Go 1.21 or newer
- Git
- Internet connection (for map tiles only)

## Installation and run

The frontend and backend run independently. Use two terminals. Start the backend first to see live data.

### Backend

```
cd backend
go run .
```

Run the tests:

```
go test
```

### Frontend

```
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

If the backend is not running, the dashboard falls back to built-in sample data and shows a "Sample data" badge. With the backend running, the badge reads "API connected" and new plots can be added.

Plots are stored in memory, so they reset when the backend restarts. A database comes in a later stage.

## API

| Endpoint | Description |
| --- | --- |
| GET /api/health | Server status |
| GET /api/villages | Village list with coordinates |
| GET /api/plots | Land plot list, newest first |
| POST /api/plots | Add a plot. JSON body: village, area, owner. New plots start as Pending |

## Project structure

```
GramMap/
├── frontend/
│   └── src/
│       ├── components/   Sidebar, Header, SummaryCard, RecentActivity,
│       │                 VillageOverview, MapView, VillageList,
│       │                 PlotFilters, PlotTable, AddPlotForm
│       ├── data/         sampleData.js (fallback data)
│       ├── styles/       base, layout, dashboard, overview, map,
│       │                 status, filters, addplot
│       ├── api.js        fetch helpers for the backend
│       ├── App.jsx
│       └── main.jsx
├── backend/
│   ├── main.go           server, CORS, routes
│   ├── villages.go       village and plot data
│   ├── plots.go          GET and POST /api/plots
│   ├── plots_test.go     handler tests
│   └── go.mod
└── README.md
```

## Planned next

PostgreSQL + PostGIS for real data and plot boundaries.
