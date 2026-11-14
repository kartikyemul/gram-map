function Header({ title }) {
  return (
    <header className="header">
      <h1 className="page-title">{title}</h1>
      <div className="profile">
        <div className="avatar">AP</div>
        <div>
          <div className="profile-name">Anita Patil</div>
          <div className="profile-role">Gram Sevak</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
