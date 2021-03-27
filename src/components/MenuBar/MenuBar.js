import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useHistory } from "react-router-dom";
import "./MenuBar.css";
import { authentication } from "../../App";

const MenuBar = () => {
  const history = useHistory();
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    authentication.onLogout();
    history.push("/login");
  };
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#399EB5" }}
      className="justify-content-between"
    >
      <NavLink className="navBrand" to="/">
        QuitSmoke
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="navLink" to="/">
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
          <NavLink className="navLink" to="/myPosts">
            My Posts
          </NavLink>
          <NavLink className="navLink" to="/profile">
            Profile
          </NavLink>
          <NavLink className="navLink" to="/login">
            Login
          </NavLink>
          <NavLink className="navLink" to="/register">
            Register
          </NavLink>
          <NavLink className="navLink" to="" onClick={logoutHandler}>
            Logout
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
