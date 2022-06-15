import ProductListItem from "../components/ProductListItem";
import { Grid, Input } from "@mui/material";

const CartItem = ({ product }) => (
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
      <Input type="number" value={1} sx={{ width: "50px" }} />
    </Grid>
  </>
);

export default CartItem;
