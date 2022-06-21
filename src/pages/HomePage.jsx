import Categories from "../components/Categories";
import Products from "../components/Products";
import SearchBar from "../components/SearchBar";
import useProducts from "../hooks/useProducts";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  const {
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
  } = useProducts();

  return (
    <MainLayout>
      <SearchBar
        sx={{ width: 1 }}
        products={products}
        onSelect={handleSelectedProduct}
      />
      <Categories
        onSelect={handleSelectCategory}
        selected={selectedCategory}
        categories={categories}
        error={categoriesError}
        loading={loadingCategories}
      />
      <Products
        products={filteredProducts}
        loading={loadingProducts}
        error={productsError}
      />
    </MainLayout>
  );
};

export default HomePage;
