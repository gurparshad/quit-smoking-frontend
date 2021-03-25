import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#399EB5" }}
      className="justify-content-between"
    >
      <NavLink className="navBrand" to="/">
        QuitNow
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="navLink" to="/dashboard">
            Home
          </NavLink>
          <NavLink className="navLink" to="/community">
            Community
          </NavLink>
          <NavLink className="navLink" to="/tips">
            Tips
          </NavLink>
          <NavLink className="navLink" to="/motivation">
            Motivation
          </NavLink>
          <NavLink className="navLink" to="/achievements">
            Achievments
          </NavLink>
          <NavLink className="navLink" to="/login">
            Login
          </NavLink>
          <NavLink className="navLink" to="/register">
            Register
          </NavLink>
          <NavLink className="navLink" to="">
            Logout
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
