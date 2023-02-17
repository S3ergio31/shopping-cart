import axios from "axios"
import { useContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { NotificationContext } from "context/NotificationProvider";
import { CartContext } from "context/CartProvider";

const API_URL = process.env.REACT_APP_API_URL;

export default function useAuth() {
    const { save, value, remove } = useLocalStorage('auth');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(JSON.parse(value));
    const [error, setError] = useState();
    const Notification = useContext(NotificationContext);
    const { clear } = useContext(CartContext);

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

    const logout = () => {
        remove();
        clear();
        setUser(null);
        Notification.info("User logged out");
    }

    const getBearerHeader = () => ({ 
        Authorization: `Bearer ${user.token}`
    });

    return {
        login,
        getBearerHeader,
        logout,
        loading,
        user,
        error
    }
}
