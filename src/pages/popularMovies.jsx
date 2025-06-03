import MovieCard from '../components/MovieCard'
import { useSelector } from 'react-redux';

function PopularMovies() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    return (
        <main className="px-6 py-10">
            <h1 className={`text-3xl font-bold mb-8 flex items-center gap-2 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>
                Popular Movies
            </h1>
            <MovieCard />
        </main>
    );
}

export default PopularMovies;