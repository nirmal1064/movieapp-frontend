import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user.auth && <Nav.Link href="/login">Login</Nav.Link>}
            {!user.auth && <Nav.Link href="/register">Register</Nav.Link>}
            {user.auth && <Nav.Link href="/watched">Watched</Nav.Link>}
            {user.auth && <Nav.Link href="/watchlist">Watchlist</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
