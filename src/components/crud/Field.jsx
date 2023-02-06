import {
  capitalize,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { CrudContext } from "context/CrudProvider";
import { useContext } from "react";

const Field = ({ attribute }) => {
  const {
    selectedModel,
    setSelectedModel,
    validationErrors,
    resetValidationErrors,
  } = useContext(CrudContext);

  const error = validationErrors && validationErrors[attribute.name];

  const handleChange = ({ target }) => {
    resetValidationErrors();

    setSelectedModel({
        ...selectedModel,
        [target.name]: target.value,
    });
  };

  if (attribute.type === "select") {
    const selectedOption = attribute.options.find(
      (o) => o.id === (selectedModel[attribute.name] || {}).id
    );
    return (
      <FormControl fullWidth sx={{ my: 1 }} error={error}>
        <InputLabel
          size="small"
          id="select-input-label"
          required={attribute.required}
        >
          {capitalize(attribute.name)}
        </InputLabel>
        <Select
          id="select-input"
          labelId="select-input-label"
          size="small"
          value={selectedOption}
          label={capitalize(attribute.name)}
          onChange={handleChange}
          name={attribute.name}
          required={attribute.required}
        >
          {attribute.options.map((option) => (
            <MenuItem key={option.id} value={option}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    );
  }
  if (["text", "number", "url"].includes(attribute.type)) {
    return (
      <TextField
        size="small"
        sx={{ my: 1 }}
        required={attribute.required}
        label={capitalize(attribute.name)}
        name={attribute.name}
        value={selectedModel[attribute.name]}
        type={attribute.type}
        onChange={handleChange}
        error={error}
        helperText={error}
      />
    );
  }
};

export default Field;
