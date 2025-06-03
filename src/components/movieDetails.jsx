import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

function MovieDetails({ movie }) {
    const navigate = useNavigate();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <div className="flex items-center justify-between text-xs mb-2">
            <span>
                <button
                    onClick={() => navigate(`/movie-details/${movie.id}`)}
                    className={`flex items-center justify-center p-2 rounded-full font-semibold transition shadow-sm
                        text-lg
                        ${isDarkMode
                            ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                            : "bg-yellow-500 text-white hover:bg-yellow-400"
                        }`}
                    style={{ marginBottom: "0.25rem" }}
                    aria-label={`View details for ${movie.title}`}
                >
                    <FaArrowRight size={16} />
                </button>
            </span>
            <span className={isDarkMode ? "text-gray-400" : "text-gray-700"}>
                {movie.voteCount ?? movie.vote_count} votes
            </span>
        </div>
    );
}

export default MovieDetails;