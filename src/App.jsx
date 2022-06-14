import { Container } from "@mui/material";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";
import CartProvider from "./context/CartProvider";
import useProducts from "./hooks/useProducts";

const App = () => {
  const {
    products,
    filteredProducts,
    selectedCategory,
    loadingProducts,
    loadingCategories,
    categories,
    handleSelectCategory,
    handleSelectedProduct,
  } = useProducts();

  return (
    <CartProvider>
      <NavBar />
      <Container sx={{ my: 1 }}>
        <SearchBar
          sx={{ width: 1 }}
          products={products}
          onSelect={handleSelectedProduct}
        />
        <Categories
          onSelect={handleSelectCategory}
          selected={selectedCategory}
          categories={categories}
          loading={loadingCategories}
        />
        <Products products={filteredProducts} loading={loadingProducts} />
      </Container>
    </CartProvider>
  );
};

export default App;
