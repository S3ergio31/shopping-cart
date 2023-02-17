import { UserContext } from "context/UserProvider";
import { useContext } from "react";

const Auth = ({ children }) => {
    const { user } = useContext(UserContext);
    return user ? children : null;
}

export default Auth;