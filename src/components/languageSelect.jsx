import { useSelector } from "react-redux";

const languageOptions = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
    { value: "es", label: "Spanish" },
    { value: "de", label: "German" },
    { value: "ja", label: "Japanese" },
    { value: "zh", label: "Chinese" },
    { value: "ar", label: "Arabic" },
    { value: "it", label: "Italian" },
    { value: "ko", label: "Korean" },
    { value: "ru", label: "Russian" },
    { value: "hi", label: "Hindi" },
    { value: "tr", label: "Turkish" },
    { value: "pt", label: "Portuguese" },
    { value: "nl", label: "Dutch" },
    { value: "sv", label: "Swedish" },
    { value: "", label: "All Languages" }
];

function LanguageSelect({ language, handleLanguageChange }) {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    return (
        <label className="flex items-center gap-2 text-sm font-medium">
            <span>Language:</span>
            <select
                value={language}
                onChange={handleLanguageChange}
                className={`rounded px-2 py-1 border transition
                    ${isDarkMode
                        ? "bg-gray-800 border-gray-700 text-yellow-100"
                        : "bg-white border-yellow-300 text-gray-900"
                    }`}
            >
                {languageOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </label>
    );
}

export default LanguageSelect;