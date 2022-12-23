import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const NavLink = ({ path, Icon, tooltip }) => {
  return (
    <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
      <Tooltip title={tooltip}>
        <IconButton
          size="large"
          aria-label="shippping cart"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <Icon />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default NavLink;
