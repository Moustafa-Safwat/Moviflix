import { useSelector } from "react-redux";

function Footer() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <footer
            className={`w-full mt-12 py-6 px-4 flex flex-col sm:flex-row items-center justify-between border-t transition-colors duration-300
                ${isDarkMode
                    ? "bg-gradient-to-r from-gray-900 via-black to-gray-800 border-gray-800 text-yellow-100"
                    : "bg-gradient-to-r from-yellow-50 via-white to-gray-200 border-gray-200 text-gray-700"
                }`}
        >
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <span className="font-bold text-lg tracking-wide">MoviesApp</span>
            </div>
            <div className="text-xs opacity-80 text-center">
                &copy; {new Date().getFullYear()} MoviesApp. All rights reserved.<br />
                <span className="italic">Created by Moustafa Safwat</span>
            </div>
            <div className="flex gap-4 mt-2 sm:mt-0">
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline transition-colors ${isDarkMode ? "hover:text-yellow-400" : "hover:text-yellow-600"}`}
                >
                    GitHub
                </a>
                <a
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline transition-colors ${isDarkMode ? "hover:text-yellow-400" : "hover:text-yellow-600"}`}
                >
                    TMDB
                </a>
            </div>
        </footer>
    );
}

export default Footer;