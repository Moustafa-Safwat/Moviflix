import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contacts() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
        if (!form.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br font-sans
            ${isDarkMode
                ? "from-gray-900 via-black to-gray-800 text-yellow-100"
                : "from-gray-100 via-white to-gray-300 text-gray-900"
            } flex flex-col items-center justify-center px-4 py-12 transition-colors duration-300`}>
            <div className={`w-full max-w-2xl rounded-xl shadow-lg p-8 transition-colors duration-300
                ${isDarkMode ? "bg-gray-900" : "bg-yellow-50"}`}>
                <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-yellow-300" : "text-yellow-700"}`}>Contact Us</h2>
                <p className={`mb-8 text-sm ${isDarkMode ? "text-yellow-200" : "text-gray-600"} opacity-90`}>
                    We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className={`block mb-1 font-semibold ${isDarkMode ? "text-yellow-200" : "text-gray-800"}`} htmlFor="name">Name</label>
                        <input
                            className={`w-full px-4 py-2 rounded-lg border outline-none transition
                                ${isDarkMode
                                    ? "bg-gray-800 border-gray-700 text-yellow-100 placeholder-yellow-400 focus:border-yellow-400"
                                    : "bg-white border-yellow-300 text-gray-900 placeholder-yellow-400 focus:border-yellow-600"
                                }`}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
                    </div>
                    <div>
                        <label className={`block mb-1 font-semibold ${isDarkMode ? "text-yellow-200" : "text-gray-800"}`} htmlFor="email">Email</label>
                        <input
                            className={`w-full px-4 py-2 rounded-lg border outline-none transition
                                ${isDarkMode
                                    ? "bg-gray-800 border-gray-700 text-yellow-100 placeholder-yellow-400 focus:border-yellow-400"
                                    : "bg-white border-yellow-300 text-gray-900 placeholder-yellow-400 focus:border-yellow-600"
                                }`}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your.business@email.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                    </div>
                    <div>
                        <label className={`block mb-1 font-semibold ${isDarkMode ? "text-yellow-200" : "text-gray-800"}`} htmlFor="message">Message</label>
                        <textarea
                            className={`w-full px-4 py-2 rounded-lg border outline-none transition resize-none min-h-[100px]
                                ${isDarkMode
                                    ? "bg-gray-800 border-gray-700 text-yellow-100 placeholder-yellow-400 focus:border-yellow-400"
                                    : "bg-white border-yellow-300 text-gray-900 placeholder-yellow-400 focus:border-yellow-600"
                                }`}
                            id="message"
                            name="message"
                            placeholder="How can we help you? Please provide as many details as possible."
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 rounded-lg font-bold transition
                            ${isDarkMode
                                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                                : "bg-yellow-500 text-white hover:bg-yellow-600"
                            }`}
                    >
                        Send Message
                    </button>
                    {submitted && (
                        <div className="text-green-400 text-center font-semibold mt-2">
                            Thank you! Your message has been sent.
                        </div>
                    )}
                </form>
                <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                        <FaEnvelope className={isDarkMode ? "text-yellow-300" : "text-yellow-600"} />
                        <span className={isDarkMode ? "text-yellow-100" : "text-gray-800"}>info@movflix.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone className={isDarkMode ? "text-yellow-300" : "text-yellow-600"} />
                        <span className={isDarkMode ? "text-yellow-100" : "text-gray-800"}>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className={isDarkMode ? "text-yellow-300" : "text-yellow-600"} />
                        <span className={isDarkMode ? "text-yellow-100" : "text-gray-800"}>123 Movie St, Hollywood, CA</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;