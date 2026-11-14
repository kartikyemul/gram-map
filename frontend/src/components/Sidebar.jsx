const links = ["Dashboard", "Villages", "Land Plots", "Requests", "Reports"];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">G</span>
        <span className="brand-name">GramMap</span>
      </div>
      <nav className="nav">
        {links.map((link, index) => (
          <a key={link} href="#" className={index === 0 ? "nav-link active" : "nav-link"}>
            {link}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
