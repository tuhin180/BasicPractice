import React, { useEffect, useState } from "react";
import { moonIcon, sunIcon } from "../lib/IconProvider";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="flex items-center gap-2 ">
      <span className={theme === "light" ? "opacity-100" : "opacity-25"}>
        {sunIcon(theme === "light" ? "#FDB022" : "#9CA3AF", 20, 20)}
      </span>

      <label className="relative inline-block w-14 h-8 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
        <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-transform duration-300"></div>
      </label>

      <span className={theme === "dark" ? "opacity-100" : "opacity-25"}>
        {moonIcon(theme === "dark" ? "#60A5FA" : "#9CA3AF", 20, 20)}
      </span>
    </div>
  );
};

export default ThemeToggle;
