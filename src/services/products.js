import axios from "axios";

const API_URL = 'https://fakestoreapi.com';

const makeEndpoint = path => `${API_URL}/${path}`;

const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get(makeEndpoint('products'))
             .then(({ data }) => resolve(data))
             .catch(error => reject(error.response.data));
    });
}

const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        axios.get(makeEndpoint('products/categories'))
             .then(({ data }) => resolve(data))
             .catch(error => reject(error.response.data));
    });
}

export {
    getAllProducts, 
    getAllCategories
}