import CartProvider from "context/CartProvider";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import CartPage from "pages/CartPage";
import CartHasProducts from "Guards/CartHasProducts";
import NotificationProvider from "context/NotificationProvider";
import ProductsPage from "pages/ProductsPage";
import CategoryPage from "pages/CategoryPage";
import LoginPage from "pages/LoginPage";
import UserProvider from "context/UserProvider";
import PrivateRoute from "Guards/PrivateRoute";

const App = () => (
  <NotificationProvider>
    <CartProvider>
      <UserProvider>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />}
          />
          <Route 
            path="/login" 
            element={<LoginPage />}
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartHasProducts Component={CartPage} />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <PrivateRoute>
                <CategoryPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </UserProvider>
    </CartProvider>
  </NotificationProvider>
);

export default App;
