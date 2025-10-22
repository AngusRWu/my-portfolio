import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // optional, can replace with emoji

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative flex items-center justify-between w-14 h-7 rounded-full p-1 bg-gray-200 dark:bg-gray-700 transition-all duration-300"
    >
      <div
        className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-white dark:bg-gray-800 transform transition-transform duration-300 ${
          darkMode ? "translate-x-7" : "translate-x-0"
        }`}
      />
      <Sun className="text-yellow-500 w-4 h-4" />
      <Moon className="text-blue-300 w-4 h-4" />
    </button>
  );
}
