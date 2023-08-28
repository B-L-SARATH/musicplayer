import React from "react";
import "./spotify.css";
import Hero from "./Hero";
import Home from "./Home";
import Albums from "../musicplayer/Musicplayer";
import { Route, Routes, NavLink, Link, useNavigate } from "react-router-dom";
import Fetch from "./Fetch";
import Axios from "./Axios";
function Navbar() {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
    window.location.reload();
  };
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
              <button
                type="button"
                class="btn btn-light"
                onClick={handlelogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="d-flex flex-direction-column">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
          style={{ width: " 280px", height: "140vh" }}
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span class="fs-4">Menu</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
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
            </li>
            <li>
              <NavLink
                aria-current="page"
                to="/albums"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "white",
                  };
                }}
                className="nav-link"
              >
                Albums
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-current="page"
                to="/about"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "white",
                  };
                }}
                className="nav-link"
              >
                About
              </NavLink>
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
          <hr />
        </div>
        {/* <Hero /> */}
        {/* <Musicplayer /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="about" element={<Hero />} />
          <Route path="fetch" element={<Fetch />} />
          <Route path="axios" element={<Axios />} />
          <Route
            path="*"
            element={
              <div>
                <h1 style={{ margin: "200px 0 0 300px" }}> 404 NOT FOUND</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Navbar;
