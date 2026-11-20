import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";

function MapView({ villages }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef(null);

  useEffect(() => {
    const map = L.map(containerRef.current);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
    markersRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => map.remove();
  }, []);

  useEffect(() => {
    markersRef.current.clearLayers();

    villages.forEach((village) => {
      const popup = document.createElement("div");
      popup.textContent = village.name + " - " + village.plots + " plots";

      L.circleMarker([village.lat, village.lng], {
        radius: 8,
        color: "#3f6b5a",
        fillColor: "#3f6b5a",
        fillOpacity: 0.8,
      })
        .bindPopup(popup)
        .addTo(markersRef.current);
    });

    if (villages.length > 0) {
      const points = villages.map((village) => [village.lat, village.lng]);
      mapRef.current.fitBounds(points, { padding: [30, 30], maxZoom: 11 });
    }
  }, [villages]);

  return <div ref={containerRef} className="map-view"></div>;
}

export default MapView;
