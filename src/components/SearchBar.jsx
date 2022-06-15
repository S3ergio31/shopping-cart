import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ProductListItem from "./ProductListItem";

const SearchBar = ({ 
  products, 
  onSelect 
}) => (
  <Autocomplete
    sx={{backgroundColor: "white"}}
    options={products}
    autoHighlight
    getOptionLabel={(product) => product.title}
    onChange={(event, product) => onSelect(product)}
    renderOption={(props, product) => (
      <ProductListItem {...props} product={product} />
    )}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Search a product"
        inputProps={{
          ...params.inputProps
        }}
      />
    )}
  />
);

export default SearchBar;
