import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import client from "../config/client";
import Pagination from "../components/pagination";
import FilterBar from "../components/filterBar";
import MovieGrid from "../components/movieGrid";
// Helper to get the poster URL from TMDB
const getPosterUrl = (path) =>
    path
        ? `https://image.tmdb.org/t/p/w300${path}`
        : "https://via.placeholder.com/120x180?text=No+Image";


// Fetch movies helper
const fetchMovies = async (query, page, pageSize, sortBy, language) => {
    let apiUrl, params;

    if (query) {
        apiUrl = "/search/movie";
        params = {
            query,
            language: language || "en-US",
            page,
        };
    } else {
        apiUrl = "/discover/movie";
        params = {
            include_video: true,
            language: "en-US",
            page,
        };
        if (sortBy) {
            params.sort_by = sortBy;
        }
        if (language) {
            params.with_original_language = language;
        }
    }

    const { data } = await client.get(apiUrl, { params });

    return {
        results: (data.results || []).map((m) => ({
            id: m.id,
            title: m.title,
            poster: getPosterUrl(m.poster_path),
            year: m.release_date ? m.release_date.slice(0, 4) : "N/A",
            releaseDate: m.release_date || "N/A",
            voteAverage: m.vote_average || "N/A",
            voteCount: m.vote_count || "N/A",
            popularity: m.popularity || "N/A",
            language: m.original_language ? m.original_language.toUpperCase() : "N/A",
            genreIds: m.genre_ids || [],
            poster_path: m.poster_path,
            vote_average: m.vote_average,
        })),
        totalResults: data.total_results || 0,
        totalPages: data.total_pages || 1,
    };
};

// --- Main Movies Page ---
function Movies() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(12);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);

    // Filters
    const [sortBy, setSortBy] = useState("");
    const [language, setLanguage] = useState("");

    // Fetch movies when filters/search/page change
    useEffect(() => {
        setLoading(true);
        fetchMovies(query, page, pageSize, sortBy, language).then((data) => {
            setMovies(data.results);
            setTotalPages(data.totalPages);
            setTotalResults(data.totalResults);
            setLoading(false);
        });
    }, [query, page, pageSize, sortBy, language]);

    // Search submit
    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim() === "") return;
        setPage(1);
        setQuery(search.trim());
    };

    // Sort change
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        setPage(1);
        if (query) {
            setQuery("");
            setSearch("");
        }
    };

    // Language change
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        setPage(1);
    };

    // Pagination
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br font-sans
            ${isDarkMode
                ? "from-gray-900 via-black to-gray-800 text-yellow-100"
                : "from-gray-100 via-white to-gray-300 text-gray-900"
            } flex flex-col items-center px-2 sm:px-4 py-8 sm:py-12 transition-colors duration-300`}>
            <div className="w-full max-w-6xl">
                <FilterBar
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                    sortBy={sortBy}
                    handleSortChange={handleSortChange}
                    language={language}
                    handleLanguageChange={handleLanguageChange}
                    query={query}
                />
                <MovieGrid
                    movies={movies}
                    loading={loading}
                    pageSize={pageSize}
                />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    totalResults={totalResults}
                    handlePageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default Movies;