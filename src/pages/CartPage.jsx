import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartProvider";
import MainLayout from "../layouts/MainLayout";

const CartPage = () => {
  const { cart, total } = useContext(CartContext);
  return (
    <MainLayout>
      <Card sx={{ width: 0.5, margin: "auto" }}>
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            My shopping list
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={1}>
            {cart.map((product) => (
              <CartItem product={product} />
            ))}
            <Grid item xs={6} md={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h5" textAlign="right">
                Total: ${total}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default CartPage;
