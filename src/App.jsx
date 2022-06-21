import CartProvider from "./context/CartProvider";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CartHasProducts from "./Guards/CartHasProducts";
import NotificationProvider from "./context/NotificationProvider";

const App = () => (
  <NotificationProvider>
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cart"
          element={<CartHasProducts Component={CartPage} />}
        />
      </Routes>
    </CartProvider>
  </NotificationProvider>
);

export default App;
