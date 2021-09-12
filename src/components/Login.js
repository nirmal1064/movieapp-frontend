import { useEffect, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../redux/actions/userActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (user.auth) {
      history.push("/home");
    }
  }, [history, user.auth]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {user.errMsg && <Alert variant="danger">{user.errMsg}</Alert>}
          <Form onSubmit={submitForm}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button variant="success" className="w-100" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
