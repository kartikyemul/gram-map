import { navItems } from "../navigation";

function Sidebar({ route }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">G</span>
        <span className="brand-name">GramMap</span>
      </div>
      <nav className="nav">
        {navItems.map((item) => (
          <a
            key={item.route}
            href={"#/" + item.route}
            className={item.route === route ? "nav-link active" : "nav-link"}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
