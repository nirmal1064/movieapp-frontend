import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import MovieList from "../movie/MovieList";
import SearchBar from "../SearchBar";

const Home = () => {
  const user = useSelector((state) => state.user);
  const searchedMovies = useSelector((state) => state.movie.search);

  if (!user.auth && !user.token) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="text-center mb-4">
      <SearchBar />
      {searchedMovies.length > 0 ? (
        <MovieList movies={searchedMovies} type="search" />
      ) : (
        <p>Search a Movie</p>
      )}
    </div>
  );
};

export default Home;
