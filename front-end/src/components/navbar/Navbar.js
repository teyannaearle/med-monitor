import medImage from "../../assets/med-monitor.png"
import { userSignOut } from "../../services/firebase"
import "./Navbar.scss"

function Navbar() {
  return (
    <nav className="nav">
        <img src={medImage} alt="Med Monitor Logo" />
        <a href="#" onClick={userSignOut}>
        Sign out
        </a>
        <a href="#">Pharmacies and Doctors</a>
        
    </nav>
  )
}

export default Navbar