import axios from "axios";
import store from "../store";
import { signOut } from "../reducers/login";

const baseURL = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

const client = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
});

client.interceptors.response.use(
    response => response,
    error => {
        // Handle errors globally
        if (error.response && error.response.status === 401) {
            store.dispatch({ type: signOut().type });
            if (error.config.url !== "/authentication/token/validate_with_login") {
                window.location.href = "/sign-in";
            }
        }
        return Promise.reject(error);
    }
);

export default client;