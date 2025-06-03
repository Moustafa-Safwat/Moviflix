function HideScrollbarStyle() {
    return (
        <style>{`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
    );
}

export default HideScrollbarStyle;