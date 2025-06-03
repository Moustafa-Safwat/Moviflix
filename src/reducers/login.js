export const signIn = (payload) => ({ type: 'SIGNIN', payload });
export const signOut = () => ({ type: 'SIGNOUT' });

let storedLoginState = { isLogin: false, user: { name: null, id: null, avatar: null } };
try {
    const item = localStorage.getItem('is_Login');
    if (item !== null) {
        storedLoginState = JSON.parse(item);
    }
} catch {
    storedLoginState = storedLoginState;
}

const initialState = {
    isLogin: storedLoginState.isLogin,
    user:
    {
        name: storedLoginState.user.name,
        id: storedLoginState.user.id,
        avatar: storedLoginState.user.avatar,
    },
};

export default function menuReducer(state = initialState, { type, payload } = {}) {
    switch (type) {
        case signIn().type:
            localStorage.setItem('is_Login', JSON.stringify(payload));
            return payload;
        case signOut().type:
            localStorage.setItem('is_Login', { isLogin: false, user: { name: null, id: null, avatar: null } });
            return { isLogin: false, user: { name: null, id: null, avatar: null } };
        default:
            return state;
    }
}