import { useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ScrollArrow({ direction, onClick }) {
    const Icon = direction === "left" ? FaChevronLeft : FaChevronRight;
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    return (
        <button
            aria-label={`Scroll ${direction === "left" ? "Left" : "Right"}`}
            onClick={onClick}
            className={`absolute ${direction === "left" ? "left-2 sm:left-0" : "right-2 sm:right-0"} top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full transition
                ${isDarkMode
                    ? "bg-gray-900 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900"
                    : "bg-white text-yellow-600 hover:bg-yellow-500 hover:text-white"
                }
                flex items-center justify-center opacity-80 hover:opacity-100
                group-hover:opacity-100
            `}
            style={{
                boxShadow: isDarkMode
                    ? "0 4px 16px 0 rgba(20,20,30,0.45), 0 1.5px 6px 0 rgba(255,255,255,0.04)"
                    : "0 4px 16px 0 rgba(0,0,0,0.13), 0 1.5px 6px 0 rgba(255,200,0,0.07)"
            }}
        >
            <Icon size={28} />
        </button>
    );
}

export default ScrollArrow;