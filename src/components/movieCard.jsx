import { useSelector } from 'react-redux';
import MovieDetails from './movieDetails';
import MoviePoster from './moviePoster';
import MovieInfo from './movieInfo';

// Genre mapping helper
const genreMap = {
    28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
    99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
    27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Sci-Fi",
    10770: "TV", 53: "Thriller", 10752: "War", 37: "Western"
};

function MovieCard({ movie }) {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    // Prepare genres
    const genres = (movie.genreIds || movie.genre_ids || [])
        .map((id) => genreMap[id])
        .filter(Boolean)
        .slice(0, 2); // Show up to 2 genres

    return (
        <div
            className={`w-full h-full rounded-xl overflow-hidden border transition-colors duration-300 flex flex-col
                ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
                transition-transform duration-200 hover:scale-105`}
            style={{
                boxShadow: isDarkMode
                    ? "0 8px 32px 0 rgba(20,20,30,0.55), 0 2px 8px 0 rgba(255,255,255,0.04)"
                    : "0 8px 32px 0 rgba(0,0,0,0.13), 0 2px 8px 0 rgba(255,200,0,0.07)"
            }}
        >
            <MoviePoster
                poster={movie.poster}
                poster_path={movie.poster_path}
                title={movie.title}
                genres={genres}
                language={movie.language || movie.original_language?.toUpperCase() || "N/A"}
            />
            <div className="p-4 flex flex-col flex-1">
                <MovieInfo
                    title={movie.title}
                    year={movie.year || (movie.release_date ? movie.release_date.split('-')[0] : '')}
                    releaseDate={movie.releaseDate || movie.release_date || "N/A"}
                />
                <MovieDetails movie={movie} />
            </div>
        </div>
    );
}

export default MovieCard;