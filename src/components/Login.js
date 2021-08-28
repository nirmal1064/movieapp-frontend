import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Form>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" size="sm" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
