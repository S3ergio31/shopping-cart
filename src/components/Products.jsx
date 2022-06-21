import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Error from "./Error";
import LoadingProducts from "./LoadingProducts";
import ProductCard from "./ProductCard";

const Products = ({ products, loading, error }) => {
  if (error) {
    return <Error error={error} />
  }
  if (loading) {
    return (
      <ProductsContainer>
        <LoadingProducts />
      </ProductsContainer>
    );
  }
  return (
    <ProductsContainer>
      {products.map((product) => (
        <Grid item key={product.id} xs={4} sm={4} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </ProductsContainer>
  );
};

const ProductsContainer = ({ children }) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {children}
    </Grid>
  </Box>
);

export default Products;
