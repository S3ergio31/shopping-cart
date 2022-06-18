import ProductListItem from "../components/ProductListItem";
import { Grid, Input } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import DialogRemoveProduct from "./DialogRemoveProduct";

const CartItem = ({ product }) => {
  const { getProductUnits, setProductUnits, toggle } = useContext(CartContext);
  const [askForRemoving, setAskForRemoving] = useState(false);
  const [count, setCount] = useState(getProductUnits(product.id));

  const handleChange = (event) => {
    const count = parseInt(event.target.value);
    if(count === 0) {
      setAskForRemoving(true);
      return;
    }
    if (count > 0) {
      setProductUnits(product.id, count);
    } else {
      toggle(product);
    }
    setCount(count);
  };

  return (
    <>
      <DialogRemoveProduct
        show={askForRemoving}
        product={product}
        onYes={() => toggle(product)}
        onNo={() => setAskForRemoving(false)}
      />

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
          value={count}
          sx={{ width: "50px" }}
          onChange={handleChange}
        />
      </Grid>
    </>
  );
};

export default CartItem;
