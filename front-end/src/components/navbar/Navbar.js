import medImage from "../../assets/med-monitor.png";
import { userSignOut } from "../../services/firebase";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="nav">
      <img src={medImage} alt="Med Monitor Logo" />
      <div className="nav__list">
        <a href="#"> Dash</a>
        <a href="#">Pharmacies and Doctors</a>
        <a href="#" onClick={userSignOut}>
          Sign out
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
