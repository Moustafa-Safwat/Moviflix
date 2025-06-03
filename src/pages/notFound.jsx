import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[70vh] px-4 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
          : "bg-gradient-to-br from-yellow-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="mb-8 text-center max-w-md opacity-80">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button
        className={`px-6 py-2 rounded-full font-semibold shadow transition transform hover:scale-105 ${
          isDarkMode
            ? "bg-yellow-500 text-black hover:bg-yellow-400"
            : "bg-yellow-400 text-black hover:bg-yellow-300"
        }`}
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;