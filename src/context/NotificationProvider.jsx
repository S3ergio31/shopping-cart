import { createContext, useState } from "react";

const NotificationContext = createContext();
const { Provider, Consumer } = NotificationContext;

const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("info");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const notify = ({ type, message }) => {
    setMessage(message);
    setType(type);
    setOpen(true);
  };

  const info = (message) => notify({ type: "info", message });

  const warning = (message) => notify({ type: "warning", message });

  const error = (message) => notify({ type: "error", message });

  const value = {
    message,
    type,
    open,
    info,
    warning,
    error,
    handleClose
  };
  return <Provider value={value}>{children}</Provider>;
};

export default NotificationProvider;

export { NotificationContext, Consumer };
