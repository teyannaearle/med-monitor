import './App.scss'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "./providers/UserProvider";
import HomePage from './pages/home/HomePage';
const API = process.env.REACT_APP_API_URL;


function App() {
  const [userId, setUserId] = useState([]);
  const user = useContext(UserContext);
  const token = user.token


  // useEffect(() => {
  //   axios
  //     .get(`${API}/users`)
  //     .then(
  //       (response) => {
  //         // setDays(response.data);
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