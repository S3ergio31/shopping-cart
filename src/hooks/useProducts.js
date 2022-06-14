import { useEffect, useState } from "react";
import { getAllCategories, getAllProducts } from "../services/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories([...categories, 'all']))
      .finally(() => setLoadingCategories(false));
  }, []);

  useEffect(() => {
    getAllProducts()
      .then((products) => {
        setProducts(products);
        setfilteredProducts(products);
      })
      .finally(() => setLoadingProducts(false));
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    let clonedProducts = [...products];
    if (category !== "all") {
      clonedProducts = clonedProducts.filter(
        (product) => product.category === category
      );
    }
    setfilteredProducts(clonedProducts);
  };

  const handleSelectedProduct = (product) => {
    setfilteredProducts(product ? [product] : [...products]);
  };

  return {
    products,
    filteredProducts,
    selectedCategory,
    loadingProducts,
    loadingCategories,
    categories,
    handleSelectCategory,
    handleSelectedProduct,
  };
}
