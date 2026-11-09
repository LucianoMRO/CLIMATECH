
function Header({ activePage, onNavigate }) {
  const menu = [
    { id: "home", label: "Início", icon: "⌂" },
    { id: "forecast", label: "Previsão", icon: "▦" },
    { id: "about", label: "Sobre", icon: "ⓘ" },
    { id: "user", label: "Usuário", icon: "👤" }
  ];

  return (
    <header className="header">

      <div
        className="logo"
        onClick={() => onNavigate("home")}
      >
        <span className="logo-icon">☀</span>

        <h1>
          CLIMA<span>TECH</span>
        </h1>
      </div>

      <nav className="navigation">

        {menu.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={
              activePage === item.id
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}

      </nav>

    </header>
  );
}

export default Header;
