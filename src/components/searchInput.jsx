import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

function SearchInput({ search, setSearch, handleSearch }) {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);  
    
    return (
        <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto flex-1"
        >
            <input
                type="text"
                className={`w-full max-w-md px-4 py-2 rounded-lg border outline-none transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-700 text-yellow-100 placeholder-yellow-400 focus:border-yellow-400"
                        : "bg-white border-yellow-300 text-gray-900 placeholder-yellow-400 focus:border-yellow-600"
                    }`}
                placeholder="Search for movies by title..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button
                type="submit"
                className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition
                    ${isDarkMode
                        ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                        : "bg-yellow-500 text-white hover:bg-yellow-600"
                    }`}
            >
                <FaSearch />
                Search
            </button>
        </form>
    );
}

export default SearchInput; 