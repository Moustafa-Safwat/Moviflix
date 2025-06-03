import { useSelector } from "react-redux";

function MovieInfo({ title, year, releaseDate }) {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <div>
            <h2
                className={`text-base font-bold truncate mb-1 transition-colors duration-300 ${
                    isDarkMode ? "text-yellow-100" : "text-gray-900"
                }`}
            >
                {title}
            </h2>
            <div className="flex items-center gap-2 text-xs mb-2">
                <span className={isDarkMode ? "text-gray-400" : "text-gray-700"}>
                    {year}
                </span>
                <span className="text-gray-400">|</span>
                <span className={isDarkMode ? "text-gray-400" : "text-gray-700"}>
                    {releaseDate}
                </span>
            </div>
        </div>
    );
}

export default MovieInfo;