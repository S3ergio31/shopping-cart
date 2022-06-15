import NavBar from "../components/NavBar";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => (
  <>
    <NavBar />
    <Container sx={{ my: 1 }}>{children}</Container>
  </>
);

export default MainLayout;
