import React from "react"
import "./Intro.scss"
import medImage from "../../assets/med-monitor.png"

function Intro() {
  return (
    <div className="intro">
      <img className="intro__pic" src={medImage}/>
    </div>
  )
}

export default Intro