import { createContext } from "react";

const CrudContext = createContext();
const { Provider } = CrudContext;

const CrudProvider = ({ children, value }) => {
  return <Provider value={value}>{children}</Provider>;
};

export default CrudProvider;
export { CrudContext };
