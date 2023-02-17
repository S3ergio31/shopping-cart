import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";
import { NotificationContext } from "context/NotificationProvider";

const Notification = () => {
  const { open, message, type, handleClose } = useContext(NotificationContext);
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
