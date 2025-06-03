import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../reducers/theme.js';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../reducers/login.js';

function MobileMenu() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const isLogin = useSelector((state) => state.login.isLogin);
    const userName = useSelector((state) => state.login.user?.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Tabs should match Navbar, including hiding FAVORITES if not logged in
    const tabs = ["HOME", "MOVIES", "FAVORITES", "CONTACTS"];

    const signBtn = () => {
        if (isLogin) {
            dispatch({ type: signOut().type });
        }
        navigate("/sign-in");
    };

    return (
        <div className="mt-4 flex flex-col gap-2 md:hidden">
            <nav className="flex flex-col gap-2 text-sm">
                {tabs.map((tab, key) => {
                    if (tab === "FAVORITES" && !isLogin) {
                        return null;
                    }
                    return (
                        <NavLink
                            key={key}
                            to={tab === "HOME" ? "/" : tab}
                            className={({ isActive }) =>
                                `${isDarkMode ? 'text-white' : 'text-gray-900'} 
                                ${isActive ? (isDarkMode ? 'text-yellow-300' : 'text-yellow-600') : ''}`
                            }
                        >
                            {tab}
                        </NavLink>
                    );
                })}
            </nav>
            <div className="flex flex-col gap-2 mt-2">
                <button
                    className="text-sm bg-dark-400 text-black px-4 py-1 rounded-full font-semibold hover:bg-yellow-300 transition"
                    onClick={() => dispatch({ type: setTheme().type, payload: !isDarkMode })}
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
                        <span className="font-semibold">{userName}</span>
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
    );
}

export default MobileMenu;