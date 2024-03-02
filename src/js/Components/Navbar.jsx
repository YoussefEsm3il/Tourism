import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../../Css/style.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className="nav">
        <div className="logo">
          <h1>EGYPT IS MY COUNTRY</h1>
        </div>
        <div className="links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"gallery"}>Gallery</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
