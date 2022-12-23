import { LoadingButton } from "@mui/lab";
import { FormGroup } from "@mui/material";
import ConfirmDialog from "components/ConfirmDialog";
import { CrudContext } from "context/CrudProvider";
import { useContext } from "react";
import Attributes from "./Attributes";

const UpsertModal = () => {
  const { show, toggle, selectedModel, saving, upsert } =
    useContext(CrudContext);
  const title = selectedModel && selectedModel.id ? "Update" : "Create";

  return (
    <ConfirmDialog
      show={show}
      onClose={toggle}
      title={title}
      cancelActionLabel="Cancel"
      renderConfirmButton={() => (
        <LoadingButton
          onClick={() => upsert(selectedModel, toggle)}
          variant="contained"
          loading={saving}
        >
          Save
        </LoadingButton>
      )}
    >
      <FormGroup>
        <Attributes />
      </FormGroup>
    </ConfirmDialog>
  );
};

export default UpsertModal;
