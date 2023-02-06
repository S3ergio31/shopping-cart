import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ search, onSearch }) => {
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="flex-end" m={1}>
      <TextField
        value={search}
        onChange={onSearch}
        label="Search field"
        type="search"
        sx={{ backgroundColor: "white", width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
