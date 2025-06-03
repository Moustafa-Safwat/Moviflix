import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./reducers/theme.js"
import menuReducer from "./reducers/menu.js"
import loginReducer from "./reducers/login.js"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        menu: menuReducer,
        login: loginReducer
    }
});

export default store;