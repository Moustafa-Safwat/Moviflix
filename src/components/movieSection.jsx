import HomeHeader from "../components/homeHeader";
import MovieSlider from "../components/movieSlider";
import { useSelector } from "react-redux";

function MovieSection({ title, movies, loading, scrollRef, scrollByCards }) {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    return (
        <section className="mb-12">
            <HomeHeader title={title} />
            <MovieSlider
                movies={movies}
                loading={loading}
                isDarkMode={isDarkMode}
                scrollRef={scrollRef}
                scrollByCards={scrollByCards}
            />
        </section>
    );
}

export default MovieSection;