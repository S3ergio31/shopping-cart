import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShippingToolbarItem from "./ShippingToolbarItem";

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shopping-cart
        </Typography>
        <ShippingToolbarItem />
      </Toolbar>
    </AppBar>
  </Box>
);
export default NavBar;
