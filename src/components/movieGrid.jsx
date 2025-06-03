import MovieCard from "../components/movieCard";
import SkeletonCard from "../components/skeletonCard";

const CARD_WIDTH = 240;
const CARD_HEIGHT = 400;

function MovieGrid({ movies, loading, pageSize }) {
    const cardStyle = {
        width: `${CARD_WIDTH}px`,
        minWidth: `${CARD_WIDTH}px`,
        maxWidth: `${CARD_WIDTH}px`,
        height: `${CARD_HEIGHT}px`,
        display: "flex",
        padding: "1rem", // p-4
        boxSizing: "border-box",
    };

    if (loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {Array.from({ length: pageSize }).map((_, idx) => (
                    <div key={idx} style={cardStyle}>
                        <SkeletonCard />
                    </div>
                ))}
            </div>
        );
    }

    if (movies.length === 0) {
        return (
            <div className="col-span-full text-center text-lg opacity-70 py-12">
                No movies found.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {movies.map((movie) => (
                <div key={movie.id} style={cardStyle}>
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
}

export default MovieGrid;