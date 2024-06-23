import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const Header = () => {

  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md" fixed="top" style={{ width: '100%' }}>
      <Navbar.Brand>
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/dashboard">Profile</Nav.Link>
            <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;