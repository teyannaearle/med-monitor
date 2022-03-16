import medImage from "../../assets/med-monitor.png";
import { userSignOut } from "../../services/firebase";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="nav">
      <a className="nav__image" href="/dashboard">
        <img src={medImage} alt="Med Monitor Logo" />
        <p>Med&middot;Monitor</p>
      </a>
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
