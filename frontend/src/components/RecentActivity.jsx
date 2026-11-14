function RecentActivity({ items }) {
  return (
    <div className="card">
      <h2 className="card-title">Recent Activity</h2>
      <ul className="activity-list">
        {items.map((item) => (
          <li key={item.id} className="activity-item">
            <div>
              <p className="activity-text">{item.text}</p>
              <p className="activity-village">{item.village}</p>
            </div>
            <span className="activity-time">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;
