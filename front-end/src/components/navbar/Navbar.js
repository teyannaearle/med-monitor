import medImage from "../../assets/med-monitor.png";
import { userSignOut } from "../../services/firebase";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__image">
      <img src={medImage} alt="Med Monitor Logo" />
      </div>
      <div className="nav__list">
        <a href="#">Pharmacies and Doctors</a>
        <a href="/dashboard" onClick={userSignOut}>
          Sign out
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
