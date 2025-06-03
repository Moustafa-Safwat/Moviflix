import { useSelector } from 'react-redux';

function Overview({ overview  }) {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    return (
        <>
            <h2 className="text-xl font-semibold mb-2 animate-fade-in">Overview</h2>
            <div className={`mb-8 text-justify leading-relaxed text-base animate-fade-in delay-200 border-l-4 pl-4 py-2 ${isDarkMode ? 'border-yellow-700 bg-gray-900/40' : 'border-yellow-400 bg-yellow-50/60'}`}>
                {overview}
            </div>
        </>
    );
}

export default Overview;