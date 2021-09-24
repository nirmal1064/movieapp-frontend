import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchForMovies } from "../../redux/actions/movieActions";
import LoadingSpinner from "../LoadingSpinner";
import MovieList from "../movie/MovieList";
import PaginationTab from "../PaginationTab";
import SearchBar from "../SearchBar";

const Home = () => {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { search, loading } = movie;
  const searchedMovies = search.Search || [];
  const searchValue = search.searchValue || "";
  const totalPages = search.totalPages || 0;

  const renderMovies = () => {
    if (searchedMovies.length > 0) {
      return (
        <>
          <MovieList movies={searchedMovies} type="search" />
          <PaginationTab
            currentPage={currentPage}
            totalPages={totalPages}
            pageChange={pageChange}
          />
        </>
      );
    } else if (loading) {
      return <LoadingSpinner />;
    } else if (searchValue.length > 0) {
      return <h4>No Results. Try Searching again</h4>;
    } else {
      return <h4>Search for a Movie or Series</h4>;
    }
  };

  const pageChange = (p) => {
    setCurrentPage(p);
    dispatch(searchForMovies({ s: searchValue, p }));
  };

  return (
    <div className="text-center mt-2">
      <SearchBar />
      {renderMovies()}
    </div>
  );
};

export default Home;
