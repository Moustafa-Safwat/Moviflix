import { useSelector } from "react-redux";
import SearchInput from "./searchInput";
import LanguageSelect from "./languageSelect";
import SortSelect from "./sortSelect";

// --- Main FilterBar ---
function FilterBar({
    search,
    setSearch,
    handleSearch,
    sortBy,
    handleSortChange,
    language,
    handleLanguageChange,
    query
}) {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6 w-full">
            <SearchInput
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            <div className="flex flex-col sm:flex-row gap-2 items-center w-full md:w-auto">
                <SortSelect
                    sortBy={sortBy}
                    handleSortChange={handleSortChange}
                    query={query}
                />
                <LanguageSelect
                    language={language}
                    handleLanguageChange={handleLanguageChange}
                />
            </div>
        </div>
    );
}

export default FilterBar;