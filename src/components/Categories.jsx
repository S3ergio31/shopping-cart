import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ListItem from "../styled-components/ListItem.style";

const Categories = ({ 
  onSelect, 
  selected, 
  categories, 
  loading 
}) => (
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
    {loading ? (
      <CircularProgress />
    ) : (
      categories.map((category) => (
        <ListItem key={category}>
          <Chip
            icon={category === selected ? <DoneIcon /> : null}
            color={category === selected ? "primary" : "default"}
            label={category}
            onClick={() => onSelect(category)}
          />
        </ListItem>
      ))
    )}
  </Paper>
);

export default Categories;
