import { TableCell } from "@mui/material";
import DeleteAction from "./DeleteAction";
import EditAction from "./EditAction";

const Actions = ({ model }) => (
  <TableCell>
    <DeleteAction model={model} />
    <EditAction model={model} />
  </TableCell>
);

export default Actions;
