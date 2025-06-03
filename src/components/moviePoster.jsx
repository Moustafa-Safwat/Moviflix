import { useSelector } from "react-redux";

function MoviePoster({ poster, poster_path, title, genres, language }) {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <div className="relative group">
            <img
                src={poster || `https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className="w-full h-64 object-cover"
                loading="lazy"
                draggable={false}
            />
            {/* Overlay gradient for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
            {/* HD Badge */}
            <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
                HD
            </span>
            {/* Language badge */}
            <span className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold shadow
                ${isDarkMode ? "bg-gray-900 text-yellow-300" : "bg-white text-yellow-600"}
            `}>
                {language}
            </span>
            {/* Genres badges */}
            <div className="absolute bottom-3 left-3 flex gap-2">
                {genres?.map((g) => (
                    <span
                        key={g}
                        className="bg-yellow-500/90 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full shadow"
                    >
                        {g}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default MoviePoster;