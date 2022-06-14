import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Alert,
  CardActionArea,
  CardActions,
  Collapse,
  IconButton,
  Rating,
  Snackbar,
  styled,
  Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../context/CartProvider";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  const description = expand ? "Hide description" : "Show description";
  return (
    <>
      <Typography marginLeft="auto"> {description} </Typography>
      <IconButton {...other} />
    </>
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const { toggle, isProductOnCart } = useContext(CartContext);

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleAddProductToCart = () => {
    toggle(product);
    const message = !isProductOnCart(product)
      ? `${product.title} added to cart`
      : `${product.title} removed from cart`;
    setMessage(message);
    setOpen(true);
  };
  return (
    <Card>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          { message }
        </Alert>
      </Snackbar>

      <CardActionArea>
        <CardMedia
          component="img"
          image={product.image}
          alt="green iguana"
          height={250}
        />
        <CardContent>
          <Tooltip title={product.title} arrow>
            <Typography gutterBottom variant="h5" component="div" noWrap={true}>
              {product.title}
            </Typography>
          </Tooltip>
          <Typography gutterBottom variant="h5">
            ${product.price}
          </Typography>
          <Rating name="read-only" value={product.rating.rate} readOnly />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="add to cart" onClick={handleAddProductToCart}>
            <AddShoppingCartIcon
              color={isProductOnCart(product) ? "primary" : ""}
            />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.secondary" align="justify">
              {product.description}
            </Typography>
          </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;