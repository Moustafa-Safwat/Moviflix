import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Client from "../config/client";
import MovieSection from "../components/movieSection";
import MobileHint from "../components/mobileHint";
import HideScrollbarStyle from "../components/hideScrollbarStyle";

// --- Helper for fetching movies ---
const fetchMovies = async (endpoint) => {
    const { data } = await Client.get(endpoint, { params: { page: 1 } });
    return (data.results || []).map((m) => ({
        id: m.id,
        title: m.title || m.name,
        poster: m.poster_path
            ? `https://image.tmdb.org/t/p/w300${m.poster_path}`
            : "https://via.placeholder.com/120x180?text=No+Image",
        year: m.year || (m.release_date ? m.release_date.split('-')[0] : ''),
        releaseDate: m.release_date || "N/A",
        voteAverage: m.vote_average,
        voteCount: m.vote_count,
        language: m.original_language ? m.original_language.toUpperCase() : "N/A",
    }));
};

// --- Section Config List ---
const SECTIONS = [
    {
        key: "popular",
        title: "Popular Movies",
        endpoint: "/movie/popular",
    },
    {
        key: "topRated",
        title: "Top Rated Movies",
        endpoint: "/movie/top_rated",
    },
    {
        key: "upcoming",
        title: "Upcoming Movies",
        endpoint: "/movie/upcoming",
    },
    // Add more sections here easily in the future
];

// --- Main Home Component ---
function Home() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    // Use refs outside of state to avoid re-creation on each render
    const sectionRefs = useRef(
        SECTIONS.reduce((acc, section) => {
            acc[section.key] = { ref: useRef(null) };
            return acc;
        }, {})
    );

    // State for each section
    const [sectionsData, setSectionsData] = useState(
        SECTIONS.reduce((acc, section) => {
            acc[section.key] = {
                movies: [],
                loading: true,
            };
            return acc;
        }, {})
    );

    // Fetch all sections
    useEffect(() => {
        SECTIONS.forEach((section) => {
            setSectionsData((prev) => ({
                ...prev,
                [section.key]: { ...prev[section.key], loading: true }
            }));
            fetchMovies(section.endpoint).then((movies) => {
                setSectionsData((prev) => ({
                    ...prev,
                    [section.key]: {
                        ...prev[section.key],
                        movies,
                        loading: false,
                    }
                }));
            });
        });
        // eslint-disable-next-line
    }, []);

    // Keyboard navigation for accessibility (scrolls the first section)
    const handleKeyDown = (e) => {
        console.log("Key pressed:", e.key);
        const firstSection = SECTIONS[0];
        if (!firstSection) return;
        const ref = sectionRefs.current[firstSection.key]?.ref;
        if (!ref) return;
        if (e.key === "ArrowLeft") createScrollByCards(ref)("left");
        if (e.key === "ArrowRight") createScrollByCards(ref)("right");
    };

    const createScrollByCards = (ref) => (direction) => {
        const container = ref.current;
        if (!container) return;
        const card = container.querySelector(".movie-slider-card");
        const cardWidth = card ? card.offsetWidth : 220;
        const visibleCards = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4;
        const scrollAmount = cardWidth * visibleCards;
        container.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <main
            className={`px-2 sm:px-6 py-8 sm:py-10 min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-950" : "bg-gray-50"
                }`}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {SECTIONS.map((section) => (
                <MovieSection
                    key={section.key}
                    title={section.title}
                    movies={sectionsData[section.key]?.movies || []}
                    loading={sectionsData[section.key]?.loading}
                    scrollRef={sectionRefs.current[section.key].ref}
                    scrollByCards={createScrollByCards(sectionRefs.current[section.key].ref)}
                />
            ))}
            <MobileHint />
            <HideScrollbarStyle />
        </main>
    );
}

export default Home;