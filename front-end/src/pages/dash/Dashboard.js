import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="dash page">
        <div className="dash__menu">
          <a href="/add-new-med"> Add Medication For Tracking </a>
          <div className="dash__menu__search">
            <input placeholder="Search"></input>
            <button>Search my Meds</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
