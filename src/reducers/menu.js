export const openMenu = () => ({ type: 'OPEN_MENU' });
export const closeMenu = () => ({ type: 'Close_MENU' });

const initialState = {
    isMenuOpen: false,
};

export default function menuReducer(state = initialState, { type } = {}) {
    switch (type) {
        case openMenu().type:
            return { isMenuOpen: true };
        case closeMenu().type:
            return { isMenuOpen: false };
        default:
            return state;
    }
}

