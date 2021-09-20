import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/auth/Home";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Register from "./components/auth/Register";
import Header from "./components/Header";
import Movie from "./components/movie/Movie";
import Watched from "./components/movie/Watched";
import WatchList from "./components/movie/WatchList";
import { loadUser } from "./redux/actions/userActions";
import store from "./redux/store";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/movies" component={Movie} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute exact path="/Home" component={Home} />
          <PrivateRoute exact path="/watched" component={Watched} />
          <PrivateRoute exact path="/watchlist" component={WatchList} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
