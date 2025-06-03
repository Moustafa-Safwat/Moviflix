import { useSelector } from "react-redux";

function Pagination({ page, totalPages, totalResults, handlePageChange }) {
    if (totalPages <= 1) return null;

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
            <div className="text-sm opacity-80">
                Showing page <span className="font-semibold">{page}</span> of <span className="font-semibold">{totalPages}</span> &mdash; {totalResults} movies found
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className={`px-3 py-1 rounded transition font-semibold
                        ${page === 1
                            ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                            : isDarkMode
                                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                                : "bg-yellow-500 text-white hover:bg-yellow-600"
                        }`}
                >
                    Prev
                </button>
                <span className="mx-2">{page}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className={`px-3 py-1 rounded transition font-semibold
                        ${page === totalPages
                            ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                            : isDarkMode
                                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                                : "bg-yellow-500 text-white hover:bg-yellow-600"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;