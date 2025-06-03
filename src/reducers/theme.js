export const setTheme = (payload) => ({ type: 'SET_THEME', payload });

let storedTheme = true;
try {
    const item = localStorage.getItem('darkMode');
    if (item !== null) {
        storedTheme = JSON.parse(item);
    }
} catch {
    storedTheme = true;
}

const initialState = {
    isDarkMode: storedTheme,
};

export default function themeReducer(state = initialState, { type, payload } = {}) {
    switch (type) {
        case setTheme().type:
            localStorage.setItem('darkMode', JSON.stringify(payload));
            return { isDarkMode: payload };
        default:
            return state;
    }
}

