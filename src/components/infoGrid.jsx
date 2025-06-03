function InfoGrid({ movie }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm opacity-90 mb-8 border rounded-lg p-4 border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40">
            <div className="py-1 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700">
                <span className="font-semibold">Original Title:</span> {movie.original_title}
            </div>
            <div className="py-1">
                <span className="font-semibold">Language:</span> {movie.original_language?.toUpperCase()}
            </div>
            <div className="py-1 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700">
                <span className="font-semibold">Release Date:</span> {movie.release_date}
            </div>
            <div className="py-1">
                <span className="font-semibold">Popularity:</span> {movie.popularity}
            </div>
            <div className="py-1 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700">
                <span className="font-semibold">Votes:</span> {movie.vote_count}
            </div>
            <div className="py-1">
                <span className="font-semibold">Status:</span> {movie.status}
            </div>
            {movie.runtime && (
                <div className="py-1 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700">
                    <span className="font-semibold">Runtime:</span> {movie.runtime} min
                </div>
            )}
            {movie.tagline && (
                <div className="col-span-1 sm:col-span-2 italic text-yellow-600 dark:text-yellow-300 py-1">
                    “{movie.tagline}”
                </div>
            )}
        </div>
    );
}

export default InfoGrid;