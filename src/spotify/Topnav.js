import React from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Topnav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark w-100">
        <div class="container-fluid ">
          <a class="navbar-brand text-white" href="#">
            Spotify
          </a>

          <div
            class="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav itemdiv" id="sidebar">
              <NavLink
                aria-current="page"
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "white",
                  };
                }}
                className="nav-link"
              >
                Home
              </NavLink>
              <NavLink
                aria-current="page"
                to="/albums"
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "white",
                  };
                }}
              >
                Albums
              </NavLink>
              <NavLink
                aria-current="page"
                to="/about"
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "white",
                  };
                }}
              >
                About
              </NavLink>
              <NavLink
                aria-current="page"
                to="/fetch"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "white",
                  };
                }}
                className="nav-link"
              >
                Fetch
              </NavLink>
              <NavLink
                aria-current="page"
                to="/axios"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "white",
                  };
                }}
                className="nav-link"
              >
                Axios
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
                type="button"
                // className="btn btn-primary btn2"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-primary btn!important"
                    : "btn btn-primary btn2"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                type="button"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-primary btn!important"
                    : "btn btn-primary btn2"
                }
              >
                Signup
              </NavLink>{" "}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Topnav;
