import React from "react";
import { Outlet } from "react-router-dom";
import Topnav from "./Topnav";

function Auth() {
  return (
    <div>
      <Topnav />
      <Outlet />
    </div>
  );
}

export default Auth;
