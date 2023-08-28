import React from "react";
import Navbar from "./Navbar";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Auth from "./Auth";
import { useEffect } from "react";
function Spotify() {
  let user =
      localStorage.getItem("user") !== null
        ? JSON.parse(localStorage.getItem("user"))
        : null;
  return (
    <div>
      {user != null ? (
        <Navbar />
      ) : (
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default Spotify;
