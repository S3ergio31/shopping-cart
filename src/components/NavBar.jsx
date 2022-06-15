import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingToolbarItem from "./ShoppingToolbarItem";

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: "inherit"}}>
            Shopping-cart
          </Link>
        </Typography>
        <ShoppingToolbarItem />
      </Toolbar>
    </AppBar>
  </Box>
);
export default NavBar;
