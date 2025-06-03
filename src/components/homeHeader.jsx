import {useSelector} from "react-redux";

function HomeHeader({ title }) {
    
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <h1
            className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 transition-colors ${
                isDarkMode ? "text-yellow-300" : "text-yellow-600"
            }`}
        >
            <span className="inline-block w-2 h-8 bg-yellow-400 rounded-full mr-2"></span>
             {title}
        </h1>
    );
}

export default HomeHeader;