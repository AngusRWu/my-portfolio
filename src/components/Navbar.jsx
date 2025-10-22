import React from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle"; // ✅ fixed import path

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const active = useActiveSection(sections);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow z-50 flex flex-col sm:flex-row sm:justify-between items-center px-6 py-3 space-y-2 sm:space-y-0">
      {/* 🔹 Left side - Brand / Logo */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        My Portfolio
      </h1>

      {/* 🔹 Center - Section Links */}
      <div className="flex space-x-8">
        {sections.map((id) => (
          <a
            key={id}
            href={`#/${id}`}
            onClick={(e) => {
              e.preventDefault();
              // Scroll to section within the current page
              const element = document.getElementById(id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`capitalize font-medium transition-colors duration-300 ${
              active === id
                ? "text-blue-500 dark:text-blue-400 border-b-2 border-blue-500"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-400"
            }`}
          >
            {id}
          </a>
        ))}
      </div>

      {/* 🔹 Right side - Theme Toggle */}
      <ThemeToggle />
    </nav>
  );
}
