# GramMap

A GIS-inspired web dashboard for rural land governance. Stage 2 adds a Go API for villages and plots, a live OpenStreetMap map, and connects the React dashboard to the backend.

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

### Frontend

```
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

If the backend is not running, the dashboard falls back to built-in sample data and shows a "Sample data" badge. With the backend running, the badge reads "API connected".

## API

| Endpoint | Description |
| --- | --- |
| GET /api/health | Server status |
| GET /api/villages | Village list with coordinates |
| GET /api/plots | Land plot list |

## Project structure

```
GramMap/
├── frontend/
│   └── src/
│       ├── components/   Sidebar, Header, SummaryCard, RecentActivity,
│       │                 VillageOverview, MapView, VillageList, PlotTable
│       ├── data/         sampleData.js (fallback data)
│       ├── styles/       base.css, layout.css, dashboard.css,
│       │                 overview.css, map.css, status.css
│       ├── api.js        fetch helper for the backend
│       ├── App.jsx
│       └── main.jsx
├── backend/
│   ├── main.go           server, CORS, routes
│   ├── villages.go       village and plot data
│   └── go.mod
└── README.md
```

## Planned next

PostgreSQL + PostGIS for real data and plot boundaries.
