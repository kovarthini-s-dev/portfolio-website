import { useTheme } from "../../hooks/useTheme";
import "./ThemeToggle.scss";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle ${
        theme === "dark" ? "theme-toggle--dark" : ""
      }`}
      onClick={toggleTheme}
      aria-label={`Switch to ${
        theme === "light" ? "dark" : "light"
      } mode`}
    >
      <span className="theme-toggle__sun" aria-hidden="true">
        ☀
      </span>

      <span className="theme-toggle__moon" aria-hidden="true">
        ☾
      </span>

      <span className="theme-toggle__knob" />
    </button>
  );
}

export default ThemeToggle;