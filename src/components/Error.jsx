import { Alert } from "@mui/material";

const Error = ({ error }) => (
  <Alert sx={{ p: 0.5, my: 1 }} severity="error">
    {error}
  </Alert>
);

export default Error;
