import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../redux/actions/userActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  if (user) {
    return <Redirect to="/home" />;
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Login form clicked");
    loginUser({ username, password });
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" size="sm" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
