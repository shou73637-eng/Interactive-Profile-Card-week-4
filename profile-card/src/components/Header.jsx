function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="header-inner">
        <span className="header-dot" aria-hidden="true"></span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;

