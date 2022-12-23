import { IconButton } from "@mui/material";
import { CrudContext } from "context/CrudProvider";
import { useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";

const EditAction = ({ model }) => {
  const { toggle, setSelectedModel } = useContext(CrudContext);
  const handleClick = () => {
    setSelectedModel(model);
    toggle();
  };
  return (
    <IconButton aria-label="delete" onClick={handleClick}>
      <EditIcon />
    </IconButton>
  );
};

export default EditAction;
