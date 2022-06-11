import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { getAllCategories, getAllProducts } from './services/products';
import ProductCard from './ProductCard';


export default function PopularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(products => {
      console.log(products)
      setProducts(products)
    });
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        { products.map(product => (
          <Grid item key={product.id} xs={4} sm={4} md={4}>
              <ProductCard product={product} />
          </Grid>
        )) }
      </Grid>
    </Box>
  );
}
