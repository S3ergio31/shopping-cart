import IconButton from "@mui/material/IconButton";
import { Badge, Button, Divider, Menu, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "context/CartProvider";
import ProductListItem from "./ProductListItem";
import { Link } from "react-router-dom";

const ShoppingToolbarItem = () => {
  const { cart } = useContext(CartContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => cart.length && setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        size="large"
        aria-label="shippping cart"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Badge badgeContent={cart.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {cart.map((product) => (
          <MenuItem key={product.id} onClick={handleClose}>
            <ProductListItem
              key={product.id}
              product={product}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </MenuItem>
        ))}
        <Divider />
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Button sx={{ width: 1 }}>Buy</Button>
        </Link>
      </Menu>
    </>
  );
};

export default ShoppingToolbarItem;
