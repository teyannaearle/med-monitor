import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const loggedIn = window.localStorage.getItem("loggedIn")
    return loggedIn === "true" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;