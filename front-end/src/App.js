import "./App.scss";
import { apiURL } from "./util/apiURL.js";
// import { useContext } from "react";
// import { UserContext } from "./providers/UserProvider";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./util/PrivateRoute";
import HomePage from "./pages/home/HomePage";
import Dashboard from "./pages/Dashboard";
const API = apiURL();

function App() {
  // const user = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element ={<PrivateRoute />}>
          <Route path = "/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
