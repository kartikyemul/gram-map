# GramMap

A GIS-inspired web dashboard for rural land governance. Stage 1 is the project foundation: a React dashboard with static sample data and a Go health-check server.

## Tech stack

- Frontend: React + Vite + JavaScript, plain CSS
- Backend: Go (standard library only)

## Requirements

- Node.js 18 or newer, with npm
- Go 1.21 or newer
- Git

## Installation and run

The frontend and backend run independently. Use two terminals.

### Frontend

```
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

### Backend

```
cd backend
go run .
```

Test the health endpoint at http://localhost:8080/api/health

Expected response:

```json
{"status":"ok","service":"grammap-backend","time":"2026-11-14T16:00:00+05:30"}
```

## Project structure

```
GramMap/
├── frontend/
│   └── src/
│       ├── components/   Sidebar, Header, SummaryCard, RecentActivity,
│       │                 VillageOverview, MapPlaceholder, VillageList, PlotTable
│       ├── data/         sampleData.js (static sample data)
│       ├── styles/       base.css, layout.css, dashboard.css, overview.css
│       ├── App.jsx
│       └── main.jsx
├── backend/
│   ├── main.go           HTTP server, CORS, GET /api/health
│   └── go.mod
└── README.md
```

## Planned next

PostgreSQL + PostGIS, and Leaflet + OpenStreetMap maps.
