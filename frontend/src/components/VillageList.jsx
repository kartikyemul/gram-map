function VillageList({ villages }) {
  return (
    <ul className="village-list">
      {villages.map((village) => (
        <li key={village.id} className="village-item">
          <div>
            <p className="village-name">{village.name}</p>
            <p className="village-taluka">{village.taluka}</p>
          </div>
          <span className="village-plots">{village.plots} plots</span>
        </li>
      ))}
    </ul>
  );
}

export default VillageList;
