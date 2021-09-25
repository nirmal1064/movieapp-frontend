import { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearErrMsg } from "../../redux/actions/userActions";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="register-card">
      <Card.Body>
        <h2 className="text-center mb-4">Register</h2>
        {user.errMsg && (
          <Alert
            variant="danger"
            onClose={() => dispatch(clearErrMsg())}
            dismissible>
            {user.errMsg}
          </Alert>
        )}
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
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="text"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" className="w-100" type="submit">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;
