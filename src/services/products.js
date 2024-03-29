import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const get = (path) => new Promise((resolve, reject) => {
    axios.get(`${API_URL}/${path}`)
         .then(({ data }) => resolve(data))
         .catch(error => reject(error.response.data));
}); 

const getAllProducts = () => get('products');

const getAllCategories = () => get('categories');
    
export {
    getAllProducts, 
    getAllCategories
}