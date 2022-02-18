import React from "react"
import Intro from "../../components/home/Intro"
import SignIn from "../../components/home/SignIn"
import "./HomePage.scss"

function HomePage() {
  return (
    <div className="homePage">
      <div className="homePage__main">
        <h1>Med&middot;Monitor</h1>
        <div> 
          <Intro />
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default HomePage