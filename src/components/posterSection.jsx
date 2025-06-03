import { FaStar } from 'react-icons/fa';

function PosterSection({ movie }) {
    return (
        <div className="relative w-full md:w-[350px] h-[500px] flex-shrink-0 group overflow-hidden border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-700">
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''}
                alt={movie.title}
                className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-xs shadow-lg animate-bounce">
                HD
            </span>
            <span className="absolute top-4 right-4 flex items-center gap-1 text-yellow-400 font-semibold text-lg bg-black/60 px-2 py-1 rounded-full backdrop-blur-md animate-fade-in">
                <FaStar className="inline" /> {movie.vote_average?.toFixed(1)}
            </span>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        </div>
    );
}

export default PosterSection;