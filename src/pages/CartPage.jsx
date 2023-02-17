import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import CartItem from "components/CartItem";
import { CartContext } from "context/CartProvider";
import MainLayout from "layouts/MainLayout";

const CartPage = () => {
  const { cart, total } = useContext(CartContext);
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card >
            <CardContent>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                My shopping list
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Grid container spacing={1}>
                {cart.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
                <Grid item xs={6} md={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h5" textAlign="right">
                    Total: ${total.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default CartPage;
