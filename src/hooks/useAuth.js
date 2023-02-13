import axios from "axios"
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const API_URL = process.env.REACT_APP_API_URL;

export default function useAuth() {
    const { save, value } = useLocalStorage('auth');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(JSON.parse(value));
    const [error, setError] = useState();

    const login = data => {
        setLoading(true);
        setError(null);
        axios.post(`${API_URL}/users/login`, data).then(response => {
            const authUser = {
                id: response.headers['user-id'],
                token: response.headers.authorization,
            };
            save(JSON.stringify(authUser));
            setUser(authUser);
        })
        .catch(error => setError(error.response.data.message || "Login error"))
        .finally(() => setLoading(false));
    }

    const getBearerToken = () => `Bearer ${user.token}`;

    return {
        login,
        getBearerToken,
        loading,
        user,
        error
    }
}
