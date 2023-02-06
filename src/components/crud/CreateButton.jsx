import { useContext } from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CrudContext } from "context/CrudProvider";

const CreateButton = () => {
  const { toggle, setSelectedModel, headers, initSelectedModel } = useContext(CrudContext);
  const handleClick = () => {
    setSelectedModel(initSelectedModel(headers));
    toggle();
  };
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleClick}>
        Create
      </Button>
    </Box>
  );
};

export default CreateButton;
