import useAuth from "hooks/useAuth";
import { createContext } from "react";

const UserContext = createContext();
const { Provider, Consumer } = UserContext;

const UserProvider = ({ children }) => (
  <Provider value={useAuth()}>{children}</Provider>
);

export default UserProvider;

export { UserContext, Consumer };
