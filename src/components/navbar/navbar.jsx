import MobileMenu from './mobileMenu';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../reducers/theme.js';
import { openMenu, closeMenu } from '../../reducers/menu';
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../reducers/login.js';

function Navbar() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
    const isLogin = useSelector((state) => state.login.isLogin);
    const userName = useSelector((state) => state.login.user?.name); // Adjust according to your state shape
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tabs = ["HOME", "MOVIES", "FAVORITES", "CONTACTS"];

    const signBtn = () => {
        if (isLogin) {
            dispatch({ type: signOut().type });
        }
        navigate("/sign-in");
    };

    return (
        <header className={`px-6 py-4 shadow-lg ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="flex items-center justify-between">
                <div className={`${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'} text-2xl font-bold`}>🎬 Movflix</div>
                <div className="md:hidden">
                    <button onClick={() => isMenuOpen ? dispatch({ type: closeMenu().type }) : dispatch({ type: openMenu().type })} className="text-yellow-400">
                        ☰
                    </button>
                </div>
                <nav className="hidden md:flex gap-6 text-sm">
                    {tabs.map((tab, key) => {
                        if (tab === "FAVORITES" && !isLogin) {
                            return null; // Skip rendering Favorites tab if not logged in
                        }
                        return (<NavLink key={key} to={tab === "HOME" ? "/" : tab}
                            className={({ isActive }) =>
                                `${isDarkMode ? 'text-white' : 'text-gray-900'} 
                            ${isActive ? (isDarkMode ? 'text-yellow-300' : 'text-yellow-600') : ''}`
                            }>
                            {tab}
                        </NavLink>);
                    })}
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <button
                        className="text-sm bg-dark-400 text-black px-4 py-1 rounded-full font-semibold hover:bg-yellow-300 transition"
                        onClick={() => dispatch({
                            type: setTheme().type,
                            payload: !isDarkMode
                        })}
                    >
                        {isDarkMode ? (<FaSun className="text-yellow-400" />) : (<FaMoon className="text-gray-800" />)}
                    </button>
                    {isLogin && userName && (
                        <div
                            className={`flex items-center gap-2 px-4 py-1 rounded-full shadow font-medium
                                ${isDarkMode
                                    ? "bg-gray-800 text-yellow-200 border border-yellow-600"
                                    : "bg-yellow-100 text-gray-800 border border-yellow-400"
                                }`}
                        >
                            <FaUserCircle className={`text-xl ${isDarkMode ? "text-yellow-400" : "text-yellow-600"}`} />
                            <span className="hidden sm:inline">
                                Welcome, <span className="font-semibold">{userName}</span>
                            </span>
                            <span className="sm:hidden font-semibold">{userName}</span>
                        </div>
                    )}
                    <button
                        onClick={signBtn}
                        className="text-sm border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition"
                    >
                        {isLogin ? "SIGN OUT" : "SIGN IN"}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <MobileMenu />
            )}
        </header>
    );
}

export default Navbar;