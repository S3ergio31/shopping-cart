import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  CardActions,
  Collapse,
  IconButton,
  Rating,
  Tooltip,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../context/CartProvider";
import ExpandMore from "../styled-components/ExpandMore.style";
import { NotificationContext } from "../context/NotificationProvider";

const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const { toggle, isProductOnCart } = useContext(CartContext);
  const Notification = useContext(NotificationContext);

  const handleAddProductToCart = () => {
    toggle(product);
    const message = !isProductOnCart(product)
      ? `${product.title} added to cart`
      : `${product.title} removed from cart`;
    Notification.info(message);
  };

  const share = () => {
    const url = `${document.location.host}?product=${product.id}`;
    navigator.clipboard.writeText(url).then(() => {
      Notification.info("Product copied to clipboard");
    });
  };
  return (
    <Card>
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
          <Rating name="read-only" value={product.rate} readOnly />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share" onClick={share}>
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
