import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const Authenticated = () => {
  const user = useSelector((state) => state.user);
  console.log(user.auth);
  return user.auth && user.token;
};

const PrivateRoute = ({
  component: Component,
  auth = Authenticated(),
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
