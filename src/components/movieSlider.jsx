import ScrollArrow from "../components/scrollArrow";
import EdgeGradient from "../components/edgeGradient";
import SkeletonCard from "../components/skeletonCard";
import MovieCard from "../components/movieCard";

function MovieSlider({
    movies,
    loading,
    isDarkMode,
    scrollRef,
    scrollByCards,
}) {
    return (
        <div className="relative group">
            <ScrollArrow direction="left" onClick={() => scrollByCards("left")} />
            <ScrollArrow direction="right" onClick={() => scrollByCards("right")} />
            {/* Place left gradient first, then right gradient last to avoid overlap */}
            <EdgeGradient side="left" />
            <EdgeGradient side="right" />
            <div
                ref={scrollRef}
                className="flex gap-3 sm:gap-5 md:gap-7 overflow-x-auto scroll-smooth py-2 px-1 items-stretch scrollbar-hide"
                style={{
                    scrollBehavior: "smooth",
                    WebkitOverflowScrolling: "touch",
                    minHeight: 0,
                    paddingBottom: 12,
                    height: "390px",
                }}
            >
                {loading
                    ? Array.from({ length: 8 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="movie-slider-card flex-shrink-0 h-full"
                            style={{
                                width: "170px",
                                maxWidth: "170px",
                            }}
                        >
                            <SkeletonCard />
                        </div>
                    ))
                    : movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="movie-slider-card flex-shrink-0 h-full transition-transform duration-200 hover:scale-105"
                            style={{
                                width: "180px",
                                maxWidth: "180px",
                            }}
                        >
                            <div
                                className={`h-full rounded-xl overflow-hidden border transition-colors duration-300 ${isDarkMode
                                    ? "bg-gray-800 border-gray-700"
                                    : "bg-white border-gray-200"
                                    }`}
                                style={{
                                    boxShadow: isDarkMode
                                        ? "0 4px 24px 0 rgba(20,20,30,0.55), 0 1.5px 6px 0 rgba(255,255,255,0.04)"
                                        : "0 4px 24px 0 rgba(0,0,0,0.13), 0 1.5px 6px 0 rgba(255,200,0,0.07)"
                                }}
                            >
                                <MovieCard movie={movie} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default MovieSlider;