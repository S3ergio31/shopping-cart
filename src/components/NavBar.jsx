import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingToolbarItem from "./ShoppingToolbarItem";
import NavLink from "./NavLink";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Shopping-cart
          </Link>
        </Typography>
        <ShoppingToolbarItem />
        <NavLink
          path="/categories"
          Icon={CategoryIcon}
          tooltip="Manage categories"
        />
        <NavLink
          path="/products"
          Icon={InventoryIcon}
          tooltip="Manage products"
        />
      </Toolbar>
    </AppBar>
  </Box>
);
export default NavBar;
