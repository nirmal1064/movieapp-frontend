import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user.auth && <Nav.Link href="/login">Login</Nav.Link>}
            {!user.auth && <Nav.Link href="/register">Register</Nav.Link>}
            {user.auth && <Nav.Link href="/home">Home</Nav.Link>}
            {user.auth && <Nav.Link href="/watched">Watched</Nav.Link>}
            {user.auth && <Nav.Link href="/watchlist">Watchlist</Nav.Link>}
          </Nav>
          {user.auth && <Button onClick={handleLogout}>Logout</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
