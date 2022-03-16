import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="dash page">
        <div className="dash__menu">
          <a href="#"> Add Medication For Tracking </a>
          <div className="dash__menu__search">
            <input placeholder="Search my Meds"></input>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
