import "./Logo.scss"
import medImage from "../../assets/med-monitor.png"

function Logo() {
  return (
    <div className="intro">
      <img className="intro__pic" src={medImage} alt="Med Monitor Logo"/>
    </div>
  )
}

export default Logo