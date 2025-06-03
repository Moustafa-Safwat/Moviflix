import { useSelector } from "react-redux";

function EdgeGradient({ side }) {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    // Correctly position the gradient on the left or right
    const positionClass = side === "left" ? "left-0" : "right-0";
    const direction = side === "left" ? "right" : "left";
    const bg = isDarkMode
        ? `linear-gradient(to ${direction}, #111827 5%, transparent)`
        : `linear-gradient(to ${direction}, #f9fafb 5%, transparent)`;

    return (
        <div
            className={`pointer-events-none absolute top-0 h-full w-12 z-10 ${positionClass}`}
            style={{ background: bg }}
        />
    );
}

export default EdgeGradient;