import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchForMovies } from "../../redux/actions/movieActions";
import { UserActionTypes } from "../../redux/constants/userActionTypes";
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

  const pageChange = (p) => {
    setCurrentPage(p);
    dispatch(searchForMovies({ s: searchValue, p }));
  };

  const submitSearch = (searchInput, cSearch) => {
    if (searchInput.length > 2 && searchInput !== cSearch) {
      dispatch(searchForMovies({ s: searchInput, p: 1 }));
    } else if (searchInput.length === 0) {
      dispatch({ type: UserActionTypes.CLEAR_MOVIES });
    }
  };

  const renderMovies = () => {
    if (searchedMovies.length > 0) {
      return (
        <>
          <PaginationTab
            currentPage={currentPage}
            totalPages={totalPages}
            pageChange={pageChange}
          />
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
      return <h4>No Results. Try Again</h4>;
    } else {
      return <h4>Search for a Movie or Series</h4>;
    }
  };

  return (
    <div className="text-center mt-2">
      <SearchBar submitSearch={submitSearch} type="search" />
      {renderMovies()}
    </div>
  );
};

export default Home;
