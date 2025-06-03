function Genres({ genres }) {
    if (!genres) return null;
    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {genres.map((genre) => (
                <span
                    key={genre.id}
                    className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold animate-pop border border-yellow-400 dark:border-yellow-700"
                >
                    {genre.name}
                </span>
            ))}
        </div>
    );
}

export default Genres;