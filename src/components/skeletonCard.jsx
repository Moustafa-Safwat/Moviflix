import { useSelector } from "react-redux";

function SkeletonCard() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <div
            className={`w-full h-full rounded-xl overflow-hidden border transition-colors duration-300 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                }`}
            style={{
                boxShadow: isDarkMode
                    ? "0 8px 32px 0 rgba(20,20,30,0.55), 0 2px 8px 0 rgba(255,255,255,0.04)"
                    : "0 8px 32px 0 rgba(0,0,0,0.13), 0 2px 8px 0 rgba(255,200,0,0.07)"
            }}
        >
            <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 animate-pulse" />
            <div className="p-4">
                <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-1/2 animate-pulse"></div>
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-full mt-4 animate-pulse"></div>
            </div>
        </div>
    );
}

export default SkeletonCard;