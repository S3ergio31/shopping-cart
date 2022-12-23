import CartProvider from "./context/CartProvider";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CartHasProducts from "./Guards/CartHasProducts";
import NotificationProvider from "./context/NotificationProvider";
import ProductsPage from "./pages/ProductsPage";
import CategoryPage from "./pages/CategoryPage";

const App = () => (
  <NotificationProvider>
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cart"
          element={<CartHasProducts Component={CartPage} />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </CartProvider>
  </NotificationProvider>
);

export default App;
