function TitleYear({ movie }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
            <h1 className="text-4xl font-bold tracking-tight animate-slide-in">{movie.title}</h1>
            <span className="text-base font-medium text-yellow-400 bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded ml-0 sm:ml-4 animate-fade-in">
                {movie.release_date?.split('-')[0]}
            </span>
        </div>
    );
}

export default TitleYear;