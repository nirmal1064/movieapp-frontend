import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import MovieList from "../movie/MovieList";
import PaginationBar from "../movie/PaginationBar";
import SearchBar from "../SearchBar";

const Home = () => {
  const user = useSelector((state) => state.user);
  const search = useSelector((state) => state.movie.search);
  const searchedMovies = search.Search || [];
  const cSearch = search.searchValue || "";
  const searching = search.searching;

  if (!user.auth && !user.token) {
    return <Redirect to="/login" />;
  }

  const renderMovies = () => {
    if (searchedMovies.length > 0) {
      return <MovieList movies={searchedMovies} type="search" />;
    } else if (searching) {
      return <h4>Searching... Please wait</h4>;
    } else if (cSearch.length > 0) {
      return <h4>No Results. Try Searching again</h4>;
    } else {
      return <h4>Search for a Movie or Series</h4>;
    }
  };

  return (
    <div className="text-center mt-2">
      <SearchBar />
      {renderMovies()}
      {searchedMovies.length > 0 && <PaginationBar />}
    </div>
  );
};

export default Home;
