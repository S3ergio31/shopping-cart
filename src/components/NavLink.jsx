import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const NavLink = ({ path = null, Icon, tooltip, onClick = () => {} }) => {
  if (!path) {
    return <Button tooltip={tooltip} Icon={Icon} onClick={onClick}/>
  }
  return (
    <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
      <Button onClick={onClick} tooltip={tooltip} Icon={Icon} />
    </Link>
  );
};

const Button = ({tooltip, Icon, onClick}) => (
  <Tooltip title={tooltip}>
    <IconButton
      size="large"
      aria-label="shippping cart"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      onClick={onClick}
    >
      <Icon />
    </IconButton>
  </Tooltip>
)
export default NavLink;
