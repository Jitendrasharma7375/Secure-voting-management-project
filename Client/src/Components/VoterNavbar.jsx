import React from "react";
import { Link } from "react-router-dom";

const VoterNavbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/voter-dashboard">
        Voter Dashboard
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/voter-home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/voter-profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/voter-votes">
              Votes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default VoterNavbar;
