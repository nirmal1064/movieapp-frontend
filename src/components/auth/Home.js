import { useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner";
import MovieList from "../movie/MovieList";
import PaginationBar from "../movie/PaginationBar";
import SearchBar from "../SearchBar";

const Home = () => {
  const movie = useSelector((state) => state.movie);
  const { search, loading } = movie;
  const searchedMovies = search.Search || [];
  const cSearch = search.searchValue || "";

  const renderMovies = () => {
    if (searchedMovies.length > 0) {
      return <MovieList movies={searchedMovies} type="search" />;
    } else if (loading) {
      return <LoadingSpinner />;
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
