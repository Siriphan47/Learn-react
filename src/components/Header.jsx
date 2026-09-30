import "./Header.css";
const Header = ({ title, theme, setTheme }) => {
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav>
      <h1>{title}</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </nav>
  );
};

export default Header;
