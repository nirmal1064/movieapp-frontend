import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log("Home");
  console.log(user);
  if (!user.auth) {
    return <Redirect to="/login" />;
  }
  return <div>Home Component</div>;
};

export default Home;
