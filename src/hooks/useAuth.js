import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL;

export default function useCart() {
    const login = data => {
        axios.post(`${API_URL}/users/login`, data);
    }

    return {
        login
    }
}
