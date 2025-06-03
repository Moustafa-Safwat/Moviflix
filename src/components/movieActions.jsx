import { FaRegHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MovieActions() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const isLogin = useSelector((state) => state.login.isLogin);
    const navigate = useNavigate();

    const addToFavorites = () => {
    }

    return (
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <button
                className={`px-6 py-2 rounded-full font-semibold shadow transition transform hover:scale-105 ${
                    isDarkMode
                        ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                        : 'bg-yellow-400 text-black hover:bg-yellow-300'
                }`}
                onClick={() => navigate(-1)}
            >
                Back
            </button>
            {isLogin && (
                <button
                    className={`px-6 py-2 rounded-full font-semibold shadow transition border flex items-center gap-2 transform hover:scale-105 ${
                        isDarkMode
                            ? 'border-yellow-500 text-yellow-400 hover:bg-yellow-900'
                            : 'border-yellow-400 text-yellow-600 hover:bg-yellow-100'
                    }`}
                    onClick={addToFavorites}
                >
                    <FaRegHeart /> Add to Favorites
                </button>
            )}
        </div>
    );
}

export default MovieActions;