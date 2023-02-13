import { Alert } from "@mui/material";

const Error = ({ error }) => {
  if (!error) return;
  return (
    <Alert sx={{ p: 0.5, my: 1 }} severity="error">
      {error}
    </Alert>
  );
};
export default Error;
