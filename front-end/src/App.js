import "./App.scss";
import axios from "axios";
import { apiURL } from "./util/apiURL.js";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./providers/UserProvider";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "./util/PrivateRoute";
import HomePage from "./pages/home/HomePage";
import Dashboard from "./pages/home/Dashboard";

const API = apiURL();

function App() {
  const [userId, setUserId] = useState([]);
  const user = useContext(UserContext);
  let navigate = useNavigate();

  // useEffect(() => {
  //   console.log(user);
  // }, [navigate]);

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(`${API}/users/fakeemail@email.com`, {
  //         headers: {
  //           Authorization: "Bearer " + user.token,
  //         },
  //       })
  //       .then(
  //         (response) => {
  //           console.log(response);
  //         },
  //         (error) => console.log("get", error)
  //       )
  //       .catch((c) => console.warn("catch", c));
  //   }
  // }, [user]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        {/* <PrivateRoute path={"/dashboard"} component={Dashboard}/> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
