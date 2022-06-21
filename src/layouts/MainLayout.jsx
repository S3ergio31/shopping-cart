import NavBar from "../components/NavBar";
import { Container } from "@mui/material";
import Notification from "../components/Notification";

const MainLayout = ({ children }) => (
  <>
    <Notification />
    <NavBar />
    <Container sx={{ my: 1 }}>{children}</Container>
  </>
);

export default MainLayout;
