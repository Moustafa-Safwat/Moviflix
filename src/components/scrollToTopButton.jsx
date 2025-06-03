import { useSelector } from "react-redux";
import { FaArrowUp } from 'react-icons/fa';
import {  useEffect,useState } from 'react';

function ScrollToTopButton() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return visible ? (
        <button
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300
                ${isDarkMode
                    ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
                }
                hover:scale-110 focus:outline-none`}
            style={{
                boxShadow: isDarkMode
                    ? "0 4px 16px 0 rgba(20,20,30,0.45), 0 1.5px 6px 0 rgba(255,255,255,0.04)"
                    : "0 4px 16px 0 rgba(0,0,0,0.13), 0 1.5px 6px 0 rgba(255,200,0,0.07)"
            }}
        >
            <FaArrowUp size={20} />
        </button>
    ) : null;
}

export default ScrollToTopButton;