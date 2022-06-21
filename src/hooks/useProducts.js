import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NotificationContext } from "../context/NotificationProvider";
import { getAllCategories, getAllProducts } from "../services/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [searchParams] = useSearchParams();
  const [categoriesError, setCategoriesError] = useState();
  const [productsError, setProductsError] = useState();
  const Notification = useContext(NotificationContext);

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories([...categories, "all"]))
      .catch(() => {
        const error = "Categories could not be loaded";
        setCategoriesError(error)
        Notification.error(error);
      })
      .finally(() => setLoadingCategories(false));
  }, []);

  useEffect(() => {
    handleSelectedProduct(getProductFromUrl());
  }, [products])

  useEffect(() => {
    getAllProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch(() => {
        const error = "Products could not be loaded";
        Notification.error("Products could not be loaded");
        setProductsError(error);
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

  const getProductFromUrl = () =>
    products.find((p) => p.id === parseInt(searchParams.get("product")));

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
    categoriesError,
    productsError,
    handleSelectCategory,
    handleSelectedProduct,
  };
}
