import Box from "@mui/material/Box";

const ProductListItem = (props) => (
  <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
    <img
      loading="lazy"
      width="20"
      src={props.product.image}
      srcSet={`${props.product.image} 2x`}
      alt={props.product.title}
    />
    {props.product.title} - ${props.product.price}
  </Box>
);

export default ProductListItem;
