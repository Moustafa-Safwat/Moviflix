function MobileHint() {
    return (
        <div className="sm:hidden text-xs text-center mt-4 text-yellow-500 font-semibold animate-pulse">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full shadow">
                Swipe left/right to see more movies →
            </span>
        </div>
    );
}

export default MobileHint;