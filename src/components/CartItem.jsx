import ProductListItem from "../components/ProductListItem";
import { Grid, Input } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartItem = ({ product }) => {
  const { getProductUnits, setProductUnits, toggle } = useContext(CartContext);

  const handleChange = (event) => {
    const count = parseInt(event.target.value);
    if(count > 0){
      setProductUnits(product.id, count);
    } else {
      toggle(product);
    }
  }

  return (
    <>
      <Grid item xs={6} md={8} alignItems="center">
        <ProductListItem
          key={product.id}
          product={product}
          imgWidth={50}
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        />
      </Grid>

      <Grid
        item
        xs={6}
        md={4}
        alignSelf="center"
        sx={{ display: "flex", justifyContent: "end" }}
      >
        <Input
          type="number"
          defaultValue={getProductUnits(product.id)}
          sx={{ width: "50px" }}
          onChange={handleChange}
        />
      </Grid>
    </>
  );
};

export default CartItem;
