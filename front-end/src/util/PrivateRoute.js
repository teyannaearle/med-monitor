import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    // const loggedIn = window.localStorage.getItem("loggedIn")
    const loggedIn = JSON.parse(window.localStorage.getItem("loggedIn"))
    return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;