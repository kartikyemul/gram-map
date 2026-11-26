import { profile } from "../data/profile";

function Header({ title, online }) {
  return (
    <header className="header">
      <h1 className="page-title">{title}</h1>
      <div className="header-right">
        <span className={online ? "status status-online" : "status status-offline"}>
          {online ? "API connected" : "Sample data"}
        </span>
        <a href="#/profile" className="profile">
          <div className="avatar">{profile.initials}</div>
          <div>
            <div className="profile-name">{profile.name}</div>
            <div className="profile-role">{profile.role}</div>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
