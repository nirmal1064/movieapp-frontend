import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user);
  if (!user.auth) {
    return <Redirect to="/login" />;
  }
  return <div className="text-center mb-4">Welcome Home {user.name}</div>;
};

export default Home;
