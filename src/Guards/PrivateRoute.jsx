import { UserContext } from "context/UserProvider";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
