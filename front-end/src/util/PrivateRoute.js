import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const PrivateRoute = ({ children }) => {
    let user = useContext(UserContext)
    console.log(user)
    return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;