import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className="text-decoration-none text-secondary" to="/">
              Home
            </Link>
            <Link className="mx-2 text-decoration-none text-secondary" to="/">
              About
            </Link>
            <Link className="text-decoration-none text-secondary" to="/">
              Career
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="dark">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
