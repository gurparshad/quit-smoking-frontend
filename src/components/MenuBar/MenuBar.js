import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#399EB5" }}
      className="justify-content-between"
    >
      <Navbar.Brand href="#home">QuitNow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/dashboard">Home</NavLink>
          <NavLink to="/community">Community</NavLink>
          <Nav.Link href="#link">Tips</Nav.Link>
          <Nav.Link href="#link">Motivation</Nav.Link>
          <Nav.Link href="#link">Achievments</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>
          <Nav.Link href="#link">Register</Nav.Link>
          <Nav.Link href="#link">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
