import axios from "axios";
import { useState, useEffect } from "react";
import './App.scss'
import HomePage from './pages/home/HomePage';
// const API = process.env.REACT_APP_API_URL;


function App() {
  // const [days, setDays] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${API}/test`)
  //     .then(
  //       (response) => {
  //         setDays(response.data);
  //       },
  //       (error) => console.log("get", error)
  //     )
  //     .catch((c) => console.warn("catch", c));
  // }, []);
  return (
    <div className='App'>
      <HomePage />
    </div>
  );
}

export default App;