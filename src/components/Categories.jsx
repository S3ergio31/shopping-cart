import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ListItem from "../styled-components/ListItem.style";
import Error from "./Error";

const Categories = ({ onSelect, selected, categories, loading, error }) => {
  if (error) {
    return <Error error={error} />
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
        <ListItem key={category}>
          <Chip
            icon={category === selected ? <DoneIcon /> : null}
            color={category === selected ? "primary" : "default"}
            label={category}
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
