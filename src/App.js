import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/movie/Movie";
import Watched from "./components/movie/Watched";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
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
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movie} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/watched" component={Watched} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
