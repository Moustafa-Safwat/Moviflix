import Navbar from '../components/navbar/navbar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ScrollToTopButton from '../components/scrollToTopButton';
import Footer from '../components/footer';

function MainLayout() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <div className={`min-h-screen bg-gradient-to-br text-gray-900 dark:text-white font-sans 
            ${isDarkMode ? 'from-gray-900 via-black to-gray-800' : 'from-gray-100 via-white to-gray-300'}`}>
            <Navbar />
            <main className="px-6 py-10">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default MainLayout;