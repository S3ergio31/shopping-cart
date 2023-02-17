import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NotificationContext } from "context/NotificationProvider";
import { getAllCategories, getAllProducts } from "services/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoriesError, setCategoriesError] = useState();
  const [productsError, setProductsError] = useState();
  const Notification = useContext(NotificationContext);

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories([...categories, { id: 0, name: "all" }]))
      .catch(() => {
        const error = "Categories could not be loaded";
        setCategoriesError(error);
        Notification.error(error);
      })
      .finally(() => setLoadingCategories(false));
  }, []);

  useEffect(() => {
    handleSelectedProduct(getProductFromUrl());
  }, [products]);

  useEffect(() => {
    handleSelectCategory(getCategoryFromUrl());
  }, [categories]);

  useEffect(() => {
    getAllProducts()
      .then((products) => {
        setProducts(
          products.map((product) => ({
            ...product,
            price: product.price.toFixed(2),
          }))
        );
      })
      .catch(() => {
        const error = "Products could not be loaded";
        Notification.error("Products could not be loaded");
        setProductsError(error);
      })
      .finally(() => setLoadingProducts(false));
  }, []);

  const handleSelectCategory = (category) => {
    if(!category) return;
    setSelectedCategory(category);
    setSearchParams({category: category.id});
    let clonedProducts = [...products];
    if (category.name !== "all") {
      clonedProducts = clonedProducts.filter(
        (product) => product.category.name === category.name
      );
    }
    setfilteredProducts(clonedProducts);
  };

  const getProductFromUrl = () => getFromUrl(products, 'product');

  const getCategoryFromUrl = () => getFromUrl(categories, 'category');

  const getFromUrl = (elements, query) =>
    elements.find((e) => e.id === parseInt(searchParams.get(query)));

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
