import { IconButton } from "@mui/material";
import { CrudContext } from "context/CrudProvider";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDialog from "components/ConfirmDialog";

const DeleteAction = ({ model }) => {
    const { remove } = useContext(CrudContext);
    const [show, setShow] = useState(false);
    return (
      <>
        <IconButton aria-label="delete" onClick={() => setShow(true)}>
          <DeleteIcon />
        </IconButton>
        <ConfirmDialog
          show={show}
          title="Delete"
          onConfirm={() => remove(model.id)}
          onClose={() => setShow(false)}
        >
          Do you want to delete this element?
        </ConfirmDialog>
      </>
    );
  };
  
export default DeleteAction;