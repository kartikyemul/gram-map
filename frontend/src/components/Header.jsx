function Header({ title, online }) {
  return (
    <header className="header">
      <h1 className="page-title">{title}</h1>
      <div className="header-right">
        <span className={online ? "status status-online" : "status status-offline"}>
          {online ? "API connected" : "Sample data"}
        </span>
        <div className="profile">
          <div className="avatar">AP</div>
          <div>
            <div className="profile-name">Anita Patil</div>
            <div className="profile-role">Gram Sevak</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
