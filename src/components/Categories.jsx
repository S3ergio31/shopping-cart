import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ListItem from "styled-components/ListItem.style";
import Error from "./Error";

const Categories = ({ onSelect, selected, categories, loading, error }) => {
  if (error) {
    return <Error error={error} />;
  }
  if (loading) {
    return (
      <CategoriesContainer>
        <CircularProgress />
      </CategoriesContainer>
    );
  }
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <ListItem key={category.name}>
          <Chip
            icon={category.name === selected.name ? <DoneIcon /> : null}
            color={category.name === selected.name ? "primary" : "default"}
            label={category.name}
            onClick={() => onSelect(category)}
          />
        </ListItem>
      ))}
    </CategoriesContainer>
  );
};

const CategoriesContainer = ({ children }) => (
  <Paper
    sx={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      listStyle: "none",
      p: 0.5,
      my: 1,
    }}
    component="ul"
  >
    {children}
  </Paper>
);

export default Categories;
