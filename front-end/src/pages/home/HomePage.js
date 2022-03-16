import React, { useEffect } from "react"
import Logo from "../../components/home/Logo"
import SignIn from "../../components/home/SignIn"
import { useNavigate } from 'react-router-dom';
import "./HomePage.scss"

function HomePage() {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(window.localStorage.getItem("loggedIn"))

  useEffect(()=>{
    if (loggedIn) navigate("/dashboard")
  },[loggedIn])

  return (
    <div className="homePage">
      <div className="homePage__main">
        <div> 
          <Logo />
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default HomePage