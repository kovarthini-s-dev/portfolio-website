import { useTheme } from "../../hooks/useTheme";
import "./ThemeToggle.scss";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme_toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <span
        className={`theme_toggle-icon ${
          isDark ? "theme_toggle-icon-dark" : ""
        }`}
        aria-hidden="true"
      >
        {isDark ? "☾" : "☀"}
      </span>

      <span className="theme_toggle-text">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}

export default ThemeToggle;