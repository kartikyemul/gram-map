function MapPlaceholder({ villages }) {
  return (
    <div className="map-placeholder">
      {villages.map((village) => (
        <div
          key={village.id}
          className="map-pin"
          style={{ left: village.x + "%", top: village.y + "%" }}
        >
          <span className="map-dot"></span>
          <span className="map-label">{village.name}</span>
        </div>
      ))}
      <p className="map-note">Map coming soon</p>
    </div>
  );
}

export default MapPlaceholder;
