import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoadingProducts from "./LoadingProducts";
import ProductCard from "./ProductCard";

const Products = ({ 
  products, 
  loading 
}) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {loading ? (
        <LoadingProducts />
      ) : (
        products.map((product) => (
          <Grid item key={product.id} xs={4} sm={4} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))
      )}
    </Grid>
  </Box>
);

export default Products;
