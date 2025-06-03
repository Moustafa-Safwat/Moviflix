import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUser, FaLock, FaExclamationCircle, FaSpinner } from "react-icons/fa";
import Client from '../config/client';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../reducers/login";

function SignIn() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [form, setForm] = useState({ username: "", password: "" });
    const [touched, setTouched] = useState({});
    const [error, setError] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Simple validation
    const validate = () => {
        const errors = {};
        if (!form.username) {
            errors.username = "Username is required";
        }
        if (!form.password) {
            errors.password = "Password is required";
        } else if (form.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        return errors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setTouched({ ...touched, [e.target.name]: true });
    };

    const getRequestToken = async () => {
        try {
            const response = await Client.get('/authentication/token/new');
            return response.data.request_token;
        } catch (error) {
            console.error("Error fetching request token:", error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        setError(errors);
        setTouched({ username: true, password: true });
        if (Object.keys(errors).length === 0) {
            setSubmitted(true);
            setLoading(true);

            const requestToken = await getRequestToken();
            if (requestToken) {
                try {
                    const response = await Client.post('/authentication/token/validate_with_login', {
                        username: form.username,
                        password: form.password,
                        request_token: requestToken
                    });

                    if (response.data.success) {
                        setLoading(false);
                        navigate("/");
                        dispatch({ type: signIn().type, payload: { isLogin: true, user: { name: form.username, id: null, avatar: null } } });
                    }
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        setError({ general: "Invalid username or password" });
                    } else {
                        setError({ general: "An error occurred during sign-in. Please try again." });
                    }
                    setSubmitted(false);
                    setLoading(false);
                }
            } else {
                setError({ general: "Failed to get request token" });
                setSubmitted(false);
                setLoading(false);
            }
        }
    };

    return (
        <div
            className={`flex items-center justify-center min-h-[80vh] px-4 ${isDarkMode
                ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
                : "bg-gradient-to-br from-yellow-50 via-white to-gray-100 text-gray-900"
                }`}
        >
            <form
                onSubmit={handleSubmit}
                className={`w-full max-w-md p-8 rounded-xl shadow-xl ${isDarkMode
                    ? "bg-gray-900 border border-gray-700"
                    : "bg-white border border-gray-200"
                    }`}
                noValidate
            >
                <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
                {error.general && (
                    <div
                        className={`flex items-center gap-2 mb-4 px-4 py-3 rounded-lg border
                            ${isDarkMode
                                ? "border-red-600 bg-red-900/60"
                                : "border-red-400 bg-red-50"
                            }`}
                    >
                        <FaExclamationCircle className={`text-xl ${isDarkMode ? "text-red-400" : "text-red-500"}`} />
                        <span className={`font-semibold ${isDarkMode ? "text-red-200" : "text-red-700"}`}>
                            {error.general}
                        </span>
                    </div>
                )}
                <div className="mb-4">
                    <label className="block mb-1 font-semibold" htmlFor="username">
                        Username
                    </label>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            autoComplete="username"
                            className={`w-full pl-10 pr-3 py-2 rounded border outline-none transition ${isDarkMode
                                ? "bg-gray-800 border-gray-700 text-white"
                                : "bg-gray-100 border-gray-300"
                                } ${error.username && touched.username ? "border-red-500" : ""}`}
                            value={form.username}
                            onChange={handleChange}
                            onBlur={() => setTouched({ ...touched, username: true })}
                            disabled={loading}
                        />
                    </div>
                    {error.username && touched.username && (
                        <p className="text-red-500 text-xs mt-1">{error.username}</p>
                    )}
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-semibold" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            className={`w-full pl-10 pr-3 py-2 rounded border outline-none transition ${isDarkMode
                                ? "bg-gray-800 border-gray-700 text-white"
                                : "bg-gray-100 border-gray-300"
                                } ${error.password && touched.password ? "border-red-500" : ""}`}
                            value={form.password}
                            onChange={handleChange}
                            onBlur={() => setTouched({ ...touched, password: true })}
                            disabled={loading}
                        />
                    </div>
                    {error.password && touched.password && (
                        <p className="text-red-500 text-xs mt-1">{error.password}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className={`w-full py-2 rounded-full font-semibold shadow transition hover:scale-105 flex items-center justify-center gap-2 ${isDarkMode
                        ? "bg-yellow-500 text-black hover:bg-yellow-400"
                        : "bg-yellow-400 text-black hover:bg-yellow-300"
                        }`}
                    disabled={loading}
                >
                    {loading && (
                        <FaSpinner className="animate-spin" />
                    )}
                    {loading ? "Signing In..." : "Sign In"}
                </button>
                {submitted && Object.keys(error).length === 0 && !loading && (
                    <p className="text-green-500 text-center mt-4">Signed in successfully!</p>
                )}
            </form>
        </div>
    );
}

export default SignIn;