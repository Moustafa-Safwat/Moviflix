import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Client from '../config/client';
import { FaRegHeart } from 'react-icons/fa';
import InfoGrid from '../components/infoGrid';
import PosterSection from '../components/posterSection';
import TitleYear from '../components/titleYear';
import Genres from '../components/genres';
import Overview from '../components/overview';
import MovieActions from '../components/movieActions';

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            try {
                const response = await Client.get(`/movie/${id}`);
                setMovie(response.data);
            } catch (err) {
                setMovie(null);
            } finally {
                setLoading(false);
            }
        };
        fetchMovie();
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-left min-h-[60vh] animate-pulse">
                <div className="w-40 h-60 bg-gray-300 dark:bg-gray-800 rounded-lg mb-6"></div>
                <div className="h-8 w-48 bg-gray-300 dark:bg-gray-800 rounded mb-2"></div>
                <div className="h-4 w-32 bg-gray-300 dark:bg-gray-800 rounded mb-2"></div>
                <div className="h-4 w-64 bg-gray-300 dark:bg-gray-800 rounded mb-2"></div>
                <div className="h-10 w-32 bg-gray-300 dark:bg-gray-800 rounded"></div>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <p className="text-lg text-gray-500 mb-4">Movie not found.</p>
                <button
                    className={`px-4 py-2 rounded-full font-semibold transition ${isDarkMode
                        ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                        : 'bg-yellow-400 text-black hover:bg-yellow-300'
                        }`}
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div
            className={`max-w-5xl mx-auto my-12 p-0 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-0 overflow-hidden animate-fade-in-up ${isDarkMode
                ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border border-gray-700'
                : 'bg-gradient-to-br from-yellow-50 via-white to-gray-100 text-gray-900 border border-gray-200'
                }`}
        >
            {/* Poster Section */}
            <PosterSection movie={movie} isDarkMode={isDarkMode} />
            {/* Details Section */}
            <div className="flex-1 flex flex-col p-8 animate-fade-in-up delay-150">
                {/* Title and Year */}
                <TitleYear movie={movie} />
                {/* Genres */}
                <Genres genres={movie.genres} />
                {/* Overview */}
                <Overview overview={movie.overview} isDarkMode={isDarkMode} />
                {/* Info Grid */}
                <InfoGrid movie={movie} />
                {/* Actions */}
                <MovieActions  />
            </div>
        </div>
    );
}

export default MovieDetails;