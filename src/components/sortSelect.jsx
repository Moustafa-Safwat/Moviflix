import { useSelector } from "react-redux";

const sortOptions = [
    { value: "", label: "None" },
    { value: "popularity.desc", label: "Popularity (Desc)" },
    { value: "popularity.asc", label: "Popularity (Asc)" },
    { value: "release_date.desc", label: "Release Date (Newest)" },
    { value: "release_date.asc", label: "Release Date (Oldest)" },
    { value: "vote_average.desc", label: "Rating (High to Low)" },
    { value: "vote_average.asc", label: "Rating (Low to High)" },
];

function SortSelect({ sortBy, handleSortChange,  query }) {

   const isDarkMode = useSelector((state) => state.theme.isDarkMode);    

    return (
        <label className="flex items-center gap-2 text-sm font-medium">
            <span>Sort by:</span>
            <select
                value={sortBy}
                onChange={handleSortChange}
                className={`rounded px-2 py-1 border transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-700 text-yellow-100"
                        : "bg-white border-yellow-300 text-gray-900"
                    }`}
                disabled={!!query}
            >
                {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </label>
    );
}

export default SortSelect;  