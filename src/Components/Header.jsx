import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  const themeSwitcher = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://cypher-test-backend.vercel.app/auth/logout",
        {},
        { withCredentials: true }
      );
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="p-4 flex items-center justify-between w-full border-b-2 dark:bg-gray-800 border-gray-300 shadow-sm">
      <div className="flex items-center">
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          CypherQuiz
        </p>
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={themeSwitcher}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
          title="Toggle Theme"
        >
          {theme === "light" ? "🌞" : "🌜"}
        </button>

        {user && (
          <div className="hidden sm:flex items-center space-x-4">
            <span className="text-lg text-gray-700 dark:text-gray-200">
              Welcome, {user.name} 👋
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-lg font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
