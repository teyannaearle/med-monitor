import "./App.scss";
// import { apiURL } from "./util/apiURL.js";
// import { useContext } from "react";
// import { UserContext } from "./providers/UserProvider";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./util/PrivateRoute";
import HomePage from "./pages/home/HomePage";
import Dashboard from "./pages/dash/Dashboard";
import NewMed from "./pages/new/NewMed";
import PharmAndDoc from "./pages/docInfo/PharmAndDoc";
// const API = apiURL();

function App() {
  // const user = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element ={<PrivateRoute />}>
          <Route path = "/dashboard" element={<Dashboard />} />
          <Route path = "/add-new-med" element={<NewMed />} />
          <Route path = "/pharmacies-and-docs" element={<PharmAndDoc />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
