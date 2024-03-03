import React from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";
function VoterNavbar() {
  const handleSignOut = () => {
    try {
      // Implement sign-out logic here
      // For example, clear session, navigate to logout endpoint, etc.
      // For demonstration purposes, let's just reload the page
      window.location.href = "/signin"; // Replace "/logout" with the actual logout endpoint
      Navigate;
    } catch (error) {
      console.error("Error occurred during sign-out:", error);
      // Optionally, display an error message or perform error handling actions
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "blue" }}
    >
      <style>
        {`
          .btn.btn-outline-light:hover {
            background-color: transparent !important;
            text-decoration: none !important;
          }
        `}
      </style>
      <div className="container-fluid">
        <div
          className="logo font-bold text-2xl text-white"
          style={{ marginRight: "20px" }}
        >
          SVMS
        </div>
        <div className="d-flex justify-content-flex-start">
          <button
            className="btn btn-outline-light"
            onClick={() => (window.location.href = "/voterhome")}
            style={{
              border: "none",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Voter Dashboard
          </button>
          <button
            className="btn btn-outline-light"
            onClick={() => (window.location.href = "/voter-votes")}
            style={{
              border: "none",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Vote
          </button>
        </div>
        <div className="ms-auto">
            <button
              className="btn btn-outline-light"
              onClick={handleSignOut}
              style={{
                border: "none",
                backgroundColor: "transparent",
                boxShadow: "none",
                textDecoration: "none",
                cursor: "pointer",
                color: "white",
              }}
            >
              Sign Out
            </button>
        </div>
      </div>
    </nav>
  );
}

export default VoterNavbar;
